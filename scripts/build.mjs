import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const baseUrl = 'https://www.mehdiloumrhari.agency/';
const metaDescription = 'Premium websites, web apps and digital systems for ambitious brands. Strategy, design, development and launch.';
const pageTitle = 'Mehdi Loumrhari — Premium Web Design & Digital Systems';
const ogImage = `${baseUrl}assets/og-image.webp`;

const read = (file) => readFileSync(path.join(root, file), 'utf8');
const write = (file, content) => writeFileSync(path.join(root, file), content);

function stripCssComments(css) {
    return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

function minifyCss(css) {
    return stripCssComments(css)
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,>+~])\s*/g, '$1')
        .replace(/;}/g, '}')
        .trim();
}

function stripJsComments(source) {
    let output = '';
    let state = 'normal';
    let quote = '';

    for (let index = 0; index < source.length; index += 1) {
        const current = source[index];
        const next = source[index + 1];
        const previous = source[index - 1];

        if (state === 'normal') {
            if ((current === '"' || current === '\'' || current === '`') && previous !== '\\') {
                state = 'string';
                quote = current;
                output += current;
                continue;
            }

            if (current === '/' && next === '/') {
                while (index < source.length && source[index] !== '\n') index += 1;
                output += '\n';
                continue;
            }

            if (current === '/' && next === '*') {
                index += 2;
                while (index < source.length && !(source[index] === '*' && source[index + 1] === '/')) index += 1;
                index += 1;
                continue;
            }

            output += current;
            continue;
        }

        output += current;

        if (state === 'string' && current === quote && previous !== '\\') {
            state = 'normal';
            quote = '';
        }
    }

    return output;
}

function minifyJs(source) {
    return stripJsComments(source)
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}()[\];,:?])\s*/g, '$1')
        .replace(/\s*([=+\-*/<>!|&]+)\s*/g, '$1')
        .trim();
}

function htmlFiles() {
    return [
        'index.html',
        'blog.html',
        '404.html',
        ...readdirSync(path.join(root, 'articles'))
            .filter((file) => file.endsWith('.html'))
            .map((file) => `articles/${file}`)
    ];
}

function assertIncludes(file, content, expected, label) {
    if (!content.includes(expected)) {
        throw new Error(`${file}: missing ${label}`);
    }
}

function validateSeo() {
    const index = read('index.html');
    assertIncludes('index.html', index, `<title>${pageTitle}</title>`, 'production title');
    assertIncludes('index.html', index, `content="${metaDescription}"`, 'production meta description');
    assertIncludes('index.html', index, `<link rel="canonical" href="${baseUrl}">`, 'canonical URL');
    assertIncludes('index.html', index, `<meta property="og:url" content="${baseUrl}">`, 'Open Graph URL');
    assertIncludes('index.html', index, `<meta property="og:image" content="${ogImage}">`, 'Open Graph image');
    assertIncludes('robots.txt', read('robots.txt'), `Sitemap: ${baseUrl}sitemap.xml`, 'robots sitemap');
    assertIncludes('sitemap.xml', read('sitemap.xml'), `<loc>${baseUrl}</loc>`, 'sitemap root');
}

function validateLocalReferences() {
    const attributePattern = /\b(?:href|src|poster)=["']([^"']+)["']/g;
    const failures = [];

    for (const file of htmlFiles()) {
        const source = read(file);
        let match;

        while ((match = attributePattern.exec(source)) !== null) {
            const reference = match[1];
            if (
                reference.startsWith('http') ||
                reference.startsWith('mailto:') ||
                reference.startsWith('tel:') ||
                reference.startsWith('data:') ||
                reference.startsWith('#') ||
                reference.startsWith('/_vercel/')
            ) {
                continue;
            }

            const withoutHash = reference.split('#')[0];
            if (!withoutHash) continue;

            const resolved = withoutHash.startsWith('/')
                ? path.join(root, withoutHash)
                : path.join(root, path.dirname(file), withoutHash);

            if (!existsSync(resolved)) {
                failures.push(`${file} -> ${reference}`);
            }
        }
    }

    if (failures.length > 0) {
        throw new Error(`Missing local references:\n${failures.join('\n')}`);
    }
}

function build() {
    mkdirSync(path.join(root, 'scripts'), { recursive: true });

    const css = minifyCss(read('style.css'));
    const js = minifyJs(read('script.js'));

    new vm.Script(js, { filename: 'script.min.js' });

    write('style.min.css', `${css}\n`);
    write('script.min.js', `${js}\n`);

    validateSeo();
    validateLocalReferences();

    console.log('Built static assets and validated SEO/local references.');
}

build();

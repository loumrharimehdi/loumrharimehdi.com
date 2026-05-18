import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const sourceFiles = [
    'src/styles/00-tokens.css',
    'src/styles/01-effects.css',
    'src/styles/02-base-accessibility.css',
    'src/styles/03-navigation-ui.css',
    'src/styles/04-landing-sections.css',
    'src/styles/05-content-pages.css',
    'src/styles/06-utilities.css',
    'src/styles/07-responsive-accessibility.css'
];

const blocks = await Promise.all(
    sourceFiles.map(async (file) => {
        const css = await readFile(join(root, file), 'utf8');
        return css.replace(/^\uFEFF/, '').trimEnd();
    })
);

await mkdir(root, { recursive: true });
await writeFile(join(root, 'style.css'), `${blocks.join('\n\n')}\n`, 'utf8');

const loaderScript = `
(function () {
    try {
        if (sessionStorage.getItem('page_loaded') === '1') {
            document.documentElement.setAttribute('data-loaded', '1');
        }
    } catch (error) {}
})();
`;

export function LoaderScript() {
    return <script dangerouslySetInnerHTML={{ __html: loaderScript }} />;
}

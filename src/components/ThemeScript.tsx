const themeScript = `
(function () {
    try {
        var theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    } catch (error) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();
`;

export function ThemeScript() {
    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

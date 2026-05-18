export function initPageLoader() {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.page-loader');
        if (!loader) return;

        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    });
}

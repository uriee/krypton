export function initPageLoader() {
    window.addEventListener('load', () => {
        const pageloader = document.getElementById('ctmpageloader');
        const infraloader = document.getElementById('infraloader');
        pageloader.classList.toggle('is-active');
        var pageloaderTimeout = setTimeout(function () {
            infraloader.classList.remove('is-active');
            pageloader.classList.remove('is-active');
            clearTimeout(pageloaderTimeout);
        }, 5600);
    })
}
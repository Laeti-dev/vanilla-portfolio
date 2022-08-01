const isInViewport = (e) => {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const section = document.getElementById('about')
const links = document.querySelector('.links-item')

document.addEventListener('scroll', function() {
    if (isInViewport(section) === true) {
        links.classList.add('active')
    } {
        passive: true
    }
})


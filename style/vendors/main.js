const isInViewport = (e) => {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const section = document.querySelector('#about')
const links = document.querySelector('.links-item')

document.addEventListener('scroll', function() {
    if (isInViewport(section)) {
        return(console.log('yes'))
}})


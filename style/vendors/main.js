
const section = document.querySelectorAll('.section')

const inViewport = (e) => {
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
)}

section.forEach((section) => {
    return (
        console.log(rect)
    )
})


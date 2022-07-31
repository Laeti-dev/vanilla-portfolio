
const section = document.querySelectorAll('.section')

section.forEach((section) => {
    const rect = section.getBoundingClientRect();
    return (
        console.log(rect)
    )
})


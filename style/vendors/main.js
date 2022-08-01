easyScrollDots({
    'fixedNav': true,
    'fixedNavId': 'nvbar',
    'fixedNavUpward': false,
    'offset': 56
    });


const navDots = document.querySelectorAll('.scroll-indicator-controller > div')
const links = document.querySelectorAll('.links-item')

/* const about = links[0].innerText.toLowerCase()
const projects = links[1].innerText.toLowerCase()
const contact = links[2].innerText.toLowerCase() */
/* console.log(about)*/


const activeLink = (value) => {
    links.forEach(link => {
        if(link.innerText.toLowerCase() == value){
            console.log(link)
        }
    })
}

document.addEventListener('scroll', () => {
    navDots.forEach(dot => {
        if(dot.classList.contains('active') == true){
        let nodeValue = dot.attributes[1].nodeValue
        activeLink(nodeValue)
    }
})
})

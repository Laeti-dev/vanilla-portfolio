easyScrollDots({
    'fixedNav': true,
    'fixedNavId': 'nvbar',
    'fixedNavUpward': false,
    'offset': 56
    });


const navDots = document.querySelectorAll('.scroll-indicator-controller > div')
const links = document.querySelectorAll('.links-item > a')

/* const about = links[0].innerText.toLowerCase()
const projects = links[1].innerText.toLowerCase()
const contact = links[2].innerText.toLowerCase() */
/* console.log(about)*/


const activeLink = (value) => {
    links.forEach(link => {
        if(link.innerText.toLowerCase() == value){
            link.classList.add('active-link')
        } else {
            link.classList.remove('active-link')
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

const form = document.querySelector('button')


form.addEventListener('click', () => {
  alert("Thank you ! You should receive a reply within 24h.")
})

// projects-hover

easyScrollDots({
    'fixedNav': true,
    'fixedNavId': 'nvbar',
    'fixedNavUpward': false,
    'offset': 56
    });


const navDots = document.querySelectorAll('.scroll-indicator-controller > div')
const links = document.querySelectorAll('.links-item')



document.addEventListener('scroll', () => {
    navDots.forEach(dot => {
        if(dot.classList.contains('active') == true){
        let nodeValue = dot.attributes[1].nodeValue
        return nodeValue
        }
    });
    
})

links.forEach(link => {
    if(link.innerText == `'${nodeValue}'`){
        console.log(link)
    }
})
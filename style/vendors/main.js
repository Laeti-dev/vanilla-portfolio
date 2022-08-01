easyScrollDots({
    'fixedNav': true,
    'fixedNavId': 'nvbar',
    'fixedNavUpward': false,
    'offset': 56
    });


const navDots = document.querySelectorAll('.scroll-indicator-controller > div')
const links = document.querySelectorAll('.links-item')

navDots.forEach(dot => {
        if(dot.classList.contains('active') == true){

        return console.log(dot.attributes[1].name)
    }
}
)



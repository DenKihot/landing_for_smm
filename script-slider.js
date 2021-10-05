$(document).ready(function(){
const slider = new Splide('.splide').mount();
let portfolio = document.querySelector('.portfolio__wrapper h2')
let contacts = document.querySelector('.contacts')


slider.on('active', function (item) {
    setTimeout(() => {
        item.slide.style.filter = 'grayscale(0%)'
        getGrey()
    }, 500);
});


slider.on('inactive', function (item) {
    item.slide.style.filter = 'grayscale(100%)'
});

function getGrey() {
    let liStart = document.querySelector('.splide__slide.is-active.is-visible')
    window.addEventListener('scroll', (event) => {
            if (window.innerHeight - contacts.getBoundingClientRect().top >= 0) {
                liStart.style.filter = 'grayscale(0%)'
            } else if (window.innerHeight - portfolio.getBoundingClientRect().top <= 0) {
                liStart.style.filter = 'grayscale(100%)'
            }
    })

}


});

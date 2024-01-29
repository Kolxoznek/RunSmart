'use strict'

const carouselSlider = tns({
    container: '.carousel__inner',
    autoplay: true,
    speed: 500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    controls: false,
    responsive: {
        768: {
            nav: false
        },
        320: {
            nav: true
        }
      }
});

document.querySelector('.carousel__prev').addEventListener('click', ()=> {
    carouselSlider.goTo('prev')
})
document.querySelector('.carousel__next').addEventListener('click', ()=> {
    carouselSlider.goTo('next')
})

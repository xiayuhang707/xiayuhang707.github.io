
var swiperContainer = new Swiper('.swiper-container', {
    effect: 'cube',
    direction: 'vertical',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
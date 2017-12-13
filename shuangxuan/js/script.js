
var swiperContainer = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'vertical',
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//背景音乐
var mp3=document.querySelector("#mp3");
var mp3btn=document.querySelector("#mp3btn");

//暂停音乐按钮
//mp3Btn.style.animationPlayState = 'paused'
//旋转音乐按钮
//mp3Btn.style.animationPlayState = 'running'

mp3btn.onclick = function () {
    if (mp3.paused) {
        //开始旋转
        mp3btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        mp3btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
}
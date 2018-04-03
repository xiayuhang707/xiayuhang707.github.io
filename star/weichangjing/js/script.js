/**
 * Created by lenovo on 17/12/5 005.
 */
var swiper = new Swiper('.swiper-container', {
    //切换方向
    direction: 'vertical',
    //自动切换
    //autoplay: {
    //    delay: 1000,//5秒切换一次
    //},
    navigation: {
        nextEl: '.swiper-button-next',

    },
    //分页器-小圆点
    pagination: {
        el: '.swiper-pagination',
        //小圆点是否可以点击
        clickable: true
    },
    //加入动画效果
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
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





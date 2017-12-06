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
        clickable: true,
    },
});
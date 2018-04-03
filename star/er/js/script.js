var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    //等同于以下设置
    autoplay: {
     delay: 2000,
     stopOnLastSlide: false,
     disableOnInteraction: true,
     },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//数据
new Vue({
    el:"#add",
    data:{
        addlists:[
            {
              href:'shop.html',
              img:'img/10.jpg',
              text:'社交新星'
            },
            {
                href:'shop.html',
                img:'img/11.jpg',
                text:'绅士格调'
            },
            {
                href:'shop.html',
                img:'img/12.jpg',
                text:'独爱经典'
            },
            {
                href:'shop.html',
                img:'img/13.jpg',
                text:'酷女孩'
            },
            {
                href:'shop.html',
                img:'img/14.jpg',
                text:'好色玩家'
            },
            {
                href:'shop.html',
                img:'img/15.jpg',
                text:'率性出众'
            },
            {
                href:'shop.html',
                img:'img/16.jpg',
                text:'随身旅伴'
            }
        ]
    }

})







new Vue({
    el:"#app",
    data:{
        lists:[
            {
                p:'香水'
            },
            {
                p:'彩妆'
            },
            {
                p:'护肤品'
            },
            {
                p:'我的账户'
            }
        ]
    }
});



new Vue({
    el:"#adc",
    data:{
        lists:[
            {
               img:'img/32.jpg',
                h3:'BLEU DE CHANEL',
                p:'香奈儿蔚蓝男士香水',
                th:'￥890.00',
                span:'立即购买'
            },
            {
                img:'img/31.jpg',
                h3:'BLEU DE CHANEL',
                p:'香奈儿蔚蓝男士须后乳液',
                th:'￥540.00',
                span:'立即购买'
            },
            {
                img:'img/33.jpg',
                h3:'BLEU DE CHANEL',
                p:'香奈儿山茶花保湿微精华露',
                th:'￥810.00',
                span:'立即购买'
            },
            {
                img:'img/34.jpg',
                h3:'ALLURE HOMME SPORT',
                p:'香奈儿男士运动淡香水',
                th:'￥945.00',
                span:'立即购买'
            }
        ]
    }
})

//
//$(window).scroll(function(){
    //if($(window).scrollTop>100){
    //    $("#back-to-top").fadeIn(1000);
    //}else{
    //    $("#back-to-top").fadeOut(1000);
    //}
    $(".back-to-top").click(function(){
        $("body").animate({"scrollTop":"0"},2000)
    })
//})

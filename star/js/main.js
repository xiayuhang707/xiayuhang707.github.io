//hover(鼠标移入的方法 ,鼠标移出的方法)

//鼠标移入的方法
function w1i(){
    $(this).stop().animate({width:'320px'})
}
//鼠标移出的方法
function w1o(){
    $(this).stop().animate({width:'78px'})
}

$(".box a").hover(w1i,w1o);



//同等

//$(".box a").hover(
//    function(){
//        $(this).stop().animate({width:'320px'})
//    }
//    ,
//    function(){
//        $(this).stop().animate({width:'78px'})
//    }
//);

// hover() 怎么用
//320 和 78 像素 互换
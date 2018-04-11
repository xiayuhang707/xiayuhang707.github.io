/**
 * Created by lenovo on 18/3/23 023.
 */
$(function(){
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>500){
                //页面的垂直偏移量
                $("#back-to-top").fadeIn();
            }
            else
            {
                $("#back-to-top").fadeOut();
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
            //$('body,html').animate({scrollTop:0},1000);
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 1500);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    });
});


//浏览器滚动效果
//function scroll(){
//    var title = document.title;
//    var fristchar = title.charAt(0);
//    var rightstr = title.substring(1,title.length);
//    document.title = rightstr + fristchar;
//}
//setInterval("scroll()",500);



//手风琴效果
$(".title").click(function(){
    $(this).next().slideToggle(500).show();

    //toggle是判断，当前如果为收起的就展开，展开的则收起
})



//请登录
var txt=document.getElementById("comment");
var btn=document.querySelector("button");
var span=document.getElementById("span");
btn.onclick=function(){
    if(txt.value==""){
        span.innerHTML="(请填写评论)"
        span.style.color="blue"
        return false;
        //浏览器不会执行其他操作。
    }else{
        span.innerHTML="(请登录)"
    }

};












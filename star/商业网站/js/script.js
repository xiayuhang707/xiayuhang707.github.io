

var dv=document.getElementById("dv");
var span1=document.getElementById("dvt1");
dv.onblur=function(){
    if(dv.value==""){
        span1.innerHTML="(用户名不能为空)"
        span1.style.color="red"
        return false;
    }else{
        span1.innerHTML=""
        span1.style.color="#000"
    }
    if(dv.value.length<4){
        span1.innerHTML="(用户名不能少于4位)"
        span1.style.color="red"
        return false
    }
    if(!isNaN(dv.value)){
        //isNaN就是判断是否为一个数字
        span1.innerHTML="(用户名不能是纯数字)"
        span1.style.color="red"
        return false
    }
};

var dv1=document.getElementById("dv1");
var span2=document.getElementById("dvt2");
dv1.onblur=function(){
    if(dv1.value==""){
        span2.innerHTML="(邮箱不能为空)"
        span2.style.color="red"
        return false;
    }else{
        span2.innerHTML="(正确)"
        span2.style.color="#000"
    }
    if(dv1.value.indexOf("@")==-1){
        span2.innerHTML="(邮箱格式错误)"
        span2.style.color="red"
        return false
    }
    if(text.indexOf(".")==-1){
        span2.innerHTML("(邮箱格式错误)")
        span2.style.color="red"
        return false
    }
};

//var dv2=document.getElementById("dv2");
//var span3=document.getElementById("dvt3");
//dv2.onblur=function(){
//    if(dv2.value.length<4){
//        span3.innerHTML="密码为4-16位"
//        span3.style.color="red"
//        return false;
//    }else{
//        span3.innerHTML="正确"
//        span3.style.color="#000"
//    }
//    if(!isNaN(dv2.value)){
//        span3.innerHTML="密码不能全为数字"
//        span3.style.color="red"
//    }
//}

//var dv3=document.getElementById("dv4");
//dv3.onblur=function(){
//    if(dv3.value=="2457"){
//        alert("正确")
//    }else{
//        alert("验证码错误")
//    }
//}
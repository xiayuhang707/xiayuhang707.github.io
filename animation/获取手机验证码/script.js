/**
 * Created by lenovo on 18/1/3 003.
 */
var countdown = 60;

function sendemail() {
    var obj = $("#btn");
    settime(obj);

}

function settime(obj) { //发送验证码倒计时
    if (countdown == 0) {
        obj.attr('disabled', false);
        //obj.removeattr("disabled");
        obj.val("免费获取验证码");
        countdown = 60;
        return;
    } else {
        obj.attr('disabled', true);
        obj.val("重新发送(" + countdown + ")s");
        countdown--;
    }
    setTimeout(function() {
        settime(obj)
    }, 1000)
}
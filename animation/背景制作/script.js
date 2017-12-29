
var option = {
    img: '1.jpg',
    width: 500,
    height: 350,
    fontSize: "20px Microsoft YaHei",
    color: "black",
    text: '守候',
    imgType: 'jpg',
    x: 30,
    y: 30,
    xCenter: false,
    yCenter: false,
};


//画图
function draw(obj) {
    var canvas = document.getElementById("thecanvas");
    //画布大小
    canvas.width = obj.width;
    canvas.height = obj.height;
    //设置图片
    var img = new Image();
    img.src = obj.img;
    var ctx = canvas.getContext("2d");
    //设置字体的坐标
    var _x = obj.x, _y = obj.y;
    //是否居中显示
    if (obj.xCenter) {
        _x = obj.width / 2;
    }
    if (obj.yCenter) {
        _y = obj.height / 2;
    }
    //图片加载后
    img.onload = function () {
        //先画图片
        ctx.drawImage(img, 0, 0);
        //设置文字的大小
        ctx.font = obj.fontSize;
        //设置文字的颜色
        ctx.fillStyle = obj.color;
        //设置文字坐标
        if (obj.xCenter) {
            ctx.textAlign = "center";
        }
        //画文字
        ctx.fillText(obj.text, _x, _y);
    };
}

window.onload = function () {
    draw(option);
}


//画布尺寸
//获取按钮
var size = document.getElementById("size");
size.addEventListener("blur", function () {
    //根据空格，区分高宽
    var _width = parseInt(size.value.replace(/(^\s*)|(\s*$)/g, "").split(/\s+/)[0]),
        _height = parseInt(size.value.replace(/(^\s*)|(\s*$)/g, "").split(/\s+/)[1]);
    //把参数的width和height改掉
    option.width = _width || 100;
    option.height = _height || 100;
    //重新画图
    draw(option);
});


//选择图片
//获取图片控件
var file = document.getElementById("file"), imagesFile, imageData;
file.addEventListener('change', function (e) {
    //获取图片
    imagesFile = e.target.files[0];
    //把图片转base64
    var reader = new FileReader();
    reader.readAsDataURL(imagesFile);
    //图片加载后
    reader.onload = function (e) {
        //设置option的img属性，再冲洗年绘制
        imageData = this.result;
        option.img = imageData;
        draw(option);
    }
});


//用户名
var userName = document.getElementById("user-name");
userName.addEventListener("blur", function () {
    var _text = userName.value.replace(/(^\s*)|(\s*$)/g, "").split(/\s+/);
    option.text = _text[0];
    draw(option);
});


//用户的坐标
optionXCenter.addEventListener("change", function () {
    if (optionXCenter.checked) {
        option.xCenter = true;
    }
    else {
        option.xCenter = false;
        option.x = parseInt(optionX.value);
    }
    draw(option);
});
//纵坐标
var optionY = document.getElementById("text-option-y");
optionY.value = option.y;
var optionYCenter = document.getElementById("is-center-y");
optionY.addEventListener("input", function () {
    if (optionYCenter.checked) {
        option.yCenter = true;
    }
    else {
        option.yCenter = false;
        option.y = parseInt(optionY.value);
    }
    draw(option);
});
//是否垂直居中显示
optionYCenter.addEventListener("change", function () {
    if (optionYCenter.checked) {
        option.yCenter = true;
    }
    else {
        option.yCenter = false;
        option.y = parseInt(optionY.value);
    }
    draw(option);
});



//字体颜色
var textColor = document.getElementById("text-color");
textColor.addEventListener("blur", function () {
    textColor.value === "" ? option.color = "#fff" : option.color = '#' + textColor.value;
    draw(option);
});
//字体大小
var textSize = document.getElementById("text-size");
textSize.addEventListener("input", function () {
    textSize.value === "" ? option.fontSize = '20px Microsoft YaHei' : option.fontSize = textSize.value + 'px Microsoft YaHei';
    draw(option);
});

//预览图片
function saveImageInfo() {
    var mycanvas = document.getElementById("thecanvas");
    //生成图片
    var image = mycanvas.toDataURL("image/png");
    var w = window.open('about:blank', 'image from canvas');
    //把图片新进新的窗口
    w.document.write("<img src='" + image + "' alt='from canvas'/>");
}
var saveButton = document.getElementById("save-image");
saveButton.addEventListener('click', saveImageInfo);

//图片类型
var imgType = document.getElementById("img-type");
imgType.addEventListener("change",function () {
    option.imgType=this.value;
});
//下载图片
function downloadImg(fileName) {
    //获取canvas
    var myCanvas = document.getElementById("thecanvas");
    //设置图片类型
    var image = myCanvas.toDataURL("image/" + option.imgType).replace("image/" + option.imgType, "image/octet-stream");
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = image;
    //设置下载图片的名称
    save_link.download = fileName + '.' + option.imgType;
    //下载图片
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
}


//批量导出
var downloadAll = document.getElementById("download-all");
downloadAll.addEventListener('click', function () {
    var _text = userName.value.replace(/(^\s*)|(\s*$)/g, "").split(/\s+/);
    option.textAll = _text;
    option.all = true;
    option.fn = downloadImg;
    draw(option);
});

function draw(obj) {
    var canvas = document.getElementById("thecanvas");
    //画布大小
    canvas.width = obj.width;
    canvas.height = obj.height;
    //设置图片
    var img = new Image();
    img.src = obj.img;
    var ctx = canvas.getContext("2d");
    //设置字体的坐标
    var _x = obj.x, _y = obj.y;
    //是否居中显示
    if (obj.xCenter) {
        _x = obj.width / 2;
    }
    if (obj.yCenter) {
        _y = obj.height / 2;
    }
    //图片加载后
    img.onload = function () {
        //是否是全部打印
        if(obj.all){
            //遍历textAll
            for(var i=0;i<obj.textAll.length;i++){
                //绘制图片
                ctx.drawImage(img,0,0);
                //设置字体大小
                ctx.font=obj.fontSize;
                //设置字体颜色
                ctx.fillStyle=obj.color;
                //是否居中显示
                if(obj.xCenter){
                    ctx.textAlign="center";
                }
                //绘制文字
                ctx.fillText(obj.textAll[i], _x,_y);
                //是否回调
                if(obj.fn){
                    obj.fn(obj.textAll[i]);
                }
            }
            //最后取消全部批量下载
            defult.all=false;
        }
        else{
            ctx.drawImage(img,0,0);
            ctx.font=obj.fontSize;
            ctx.fillStyle=obj.color;
            if(obj.xCenter){
                ctx.textAlign="center";
            }
            ctx.fillText(obj.text, _x,_y);
        }
    };
}
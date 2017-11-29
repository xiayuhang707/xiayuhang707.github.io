/**
 * Created by lenovo on 17/11/7 007.
 */



const app=new Vue({
    el:"#app",
    data:{
        message:'',
        lists:[
            '学习 javascript',
            '学习 vue.js',
            '整个牛项目'
        ]
    },
    created:function(){
        //页面刷新的时候就会执行的内容
        //让浏览器当前的dta里面的lists数组
        //等于，浏览器缓存的字符串转成数组的值
        this.lists=localStorage.getItem(1).split(",")
    },
    methods:{
        add:function(){
            this.lists.push(this.message),
                this.message='',
                //设置浏览器缓存
                localStorage.setItem(1,this.lists)
        },
        del:function(i){
            this.lists.splice(i,1),
                localStorage.getItem(1).split(",")
        }
    }
})
// push  添加   splice  删除   (i,1)---i:从哪个索引开始，1：删除几个

























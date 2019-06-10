```

Object.defineProperty
writable:true //默认值
configurable:是否可被删除
enumerable:测试是否可枚举
Value
get/set
//展示代码
Object.defineproperty(obj,'a',{
    get(){
       return 'abc'; 
    }
    set(val){
        console.log(val)
    }
})

proxy
代理服务器的作用
⒈提高内部访问速度;
⒉可起到类似防火墙的作用;
⒊访问一些不能直接访问的网站;
⒋互联网访问安全性得到提高.
5相关的一些访问限制
6太过影响带宽的流量限制
7屏蔽一些影响公司内部流量的访问请求
8端口设置限制，防止非法攻击
var obj2={};
var proxy=new Proxy(obj2,{
    set(target,key){
      console.log(/target,key)
    }
    get(target,key,val){
      console.log(/target,key,val)
    }
})
promise
promise async/await

不存在谁替代谁，因为async-await是寄生于promise。generotator的语法糖。

//对象的状态不收外界的影响
//状态一旦改变，就不会再变,状态会被凝固
generator
generator:yield和yield* 只能在generator函数内部使用，一般的函数内使用会报错.
next()调用中的传参
for……of循环代替.next()

promise的三种状态：pennding,fulfilled,rejected
//例子
function loadImg(){
    rerurn new Promise((resolve,reject)=>{
        let img= new Image();
        img.onload=function(){
            resolve(img);
        }
        img.onerror=function(e){
        reject(e)
        }
        }
    })
}
var url="http://www.baidu.com";
loadImg(url).then(res=>{
    document.body.appendChild(res);//回调成功的参数
},err=>{
    console.log(err);
    //回调失败的参数
})..then(res1=>{
  console.log(res1)
},err1=>{
    console.log(err1)
});
//会执行显示在浏览器中 还会打印res1   
//如果地址错误的话会执行err  res1

为什么promise要放到一个函数中去呢？
特性：封装复用，new实例之后会立即执行。

promise.prototype.catch
//用于指定promise状态变为rejected时的回调函数，可以被认为是then(null,fun2)的简写形式
Promise.resolve()
//将现有说我对象转为Promise对象的快捷方式。

Promise.reject()
//快速的获取一个拒绝状态的promise对象。

Promise.all()
//promise.all方法用于将多个promise实例，包装成一个新的额promise实例。成功和失败返回的数据类型是不相同的.

Promise.race()
Promise.race方法同样是将多个promise实例，包装成一个新的额promise实例.

//判断数组还是对象


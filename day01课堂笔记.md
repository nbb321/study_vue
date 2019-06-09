```
# day01上午（介绍项目的流程）
```
1.联调：Reseful

options  查

get 相当于,增 （不能使用body）

post 更新,改 

delect删除  

body传参，json urlncode

2.可以bug 和项目管理 （禅道，Teambition）
```
# day01下午(es6,promise)
```
### vue 响应原理

###### 1.es5实现let 

定义函数（闭包） 自治性函数，暂时性死区

###### 2.es5实现const

const 可以使用defineProperty  修改描述符 
(1).writable可读写 是否重写 默认true. true/false
```
eg:
var obj={a:1};
Object.defineProperty(obj,"a",{
    writable:false //这样就不可以重新编写赋值了
})
```

 (2).enumerable 可枚举，是否(枚举)  true/false(是否可以遍历)
 ```
 eg:
 Object.defineProperty(obj,"a",{
    enumerable :false 
})
 ```
(3).configurable        删除  true/false
 ```
 eg:
 Object.defineProperty(obj,"a",{
    configurable:false //这样就不可以删除了
})
 ```

(4).value  值可以是任意类型，相当于赋值
```
eg:
 Object.defineProperty(obj,"a",{
  get(){
      return "abc"
  },
  set(val){
      console.log("val...",val)
  }
})
```

(5).get/set 获取和设置
 
###### 3.es6通过构造函数来检测类型

let obj={}  obj.constructor==Object

#### es6 proxy 代理  3.0核心 不兼容IE

Proxy是一个构造函数， 使用new Proxy创建代理器， 第一个参数为一个对象， 第二个参数也为一个对象， 返回被包裹后的代理器

`````
eg:
var obj2={};
var proxy=new Proxy(obj2,{
get(target,key){
    console.log("target...",target,key)
},
set(target,key,val){
    console.log("target...",target,key,val)
}
})
`````
**Promise ,Async (函数) /await  generator  异步转化同步 （因为嵌套）**

Promise 本质上是一个绑定了回调的对象，而不是将回调传进函数内部。

Promise  三种状态： pending fulfilled  rejected

then的参数就是构造函数里的参数,返回值是promise对象

Promise 特点：函数可以封装复用，立即执行

promise 用法：
```
eg:
function loadImg(src){
            return new Promise((resolve,reject)=>{
                let img=new Image();
                img.src=src;
                img.onload=function(){
                    resolve(img)
                }
                img.onerror=function(e){
                    reject(e);
                }
            })
        }
        let url="img.daimg.com/uploads/allimg/140112/3-140112161A7.jpg"
        loadImg(url).then(res=>{
          document.body.appendChild(res)
        },err=>{
            console.log("err...",err);
        })
```
**Promise 的链式调用**
```
  function loadImg(src){
            return new Promise((resolve,reject)=>{
                let img=new Image();
                img.src=src;
                img.onload=function(){
                    resolve(img)
                }
                img.onerror=function(e){
                    reject(e);
                }
            })
        }
        let url="http://img.daimg.com/uploads/allimg/140112/3-140112161A7.jpg"
        loadImg(url).then(res=>{
          document.body.appendChild(res)
          return "abc";
          return Promise.resolve("abc");
          //return Promise.reject(new Error('我是一个错误'))
        },err=>{
            console.log("err...",err);
        }).then(res1=>{
            console.log("res1",res1)
        },err1=>{
            console.log("err1",err1)
        }).then(res2=>{
            console.log("res2",res2)
        },err2=>{
            console.log("err2",err2)
        }).then(res3=>{
            console.log("res3",res3)
        },err3=>{
            console.log("err3",err3)
        }).catch(()=>{
            console.log("失败时执行")
        }).finally(()=>{
            console.log("finally，任何状态都会执行")
        })
```
promise 两个静态方法：reject，resolve（非转成promise）状态立即改变

catch（reject调用） finally(什么状态都会执行)
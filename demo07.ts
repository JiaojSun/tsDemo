/* let obj = {
    name:'小狗娃',
    website:'gouwa.com',
    age:18,
    saySomething:function() {
        console.log('为了前端技术');
    }
}
console.log(obj.name)
obj.saySomething(); */

// let arr1:number[]
// let arr2:Array<string>


// 数组赋值方法 两种
// 第一种  字面量赋值法
/* let arr1:number[] = []
let arr2:number[] = [1,2,3]
let arr3:Array<string> = ['狗娃','皮奇']
let arr4:Array<boolean> = [true,false,false] */

// 第二种  构造函数赋值法
let arr1:number[] = new Array()
let arr2:number[] = new Array(1,2,3)
let arr3:Array<string> = new Array('狗娃','皮奇')
let arr4:Array<boolean> = new Array(true,false,false)


// 存在的坑  声明什么类型 里面就必须是什么类型，下面这个就会报错
// let arr5:number[] = [1,2,3,false]
// 使用元祖类型可以解决上面的问题，但是在开发过程中很少使用，不推荐.
/* let x:[string,number]
x=['hello',10]   //正确

x=[10,'hello']   //必须严格按照顺序  错误 */





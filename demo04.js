"use strict";
/* function search(age:number):string{
    return '找到了'+age+'岁的小哥哥'
}

var age:number = 18;
var result:string = search(age)
console.log(result) */
// 有可选参数的函数
/* function search(age:number,stature?:string):string{
    let yy:string = ''
    yy='找到了'+age+'岁'
    if(stature!=undefined){
        yy += stature
    }
    return yy + '的小哥哥'
}

let result:string = search(22,'大长腿');
console.log(result); */
// 有默认参数的函数
/* function search(age:number=18,stature:string='水蛇腰'):string{
    let yy:string = ''
    yy='找到了'+age+'岁'
    if(stature!=undefined){
        yy += stature
    }
    return yy + '的小哥哥'
}

let result:string = search();
console.log(result); */
// 找到了22岁大长腿的小哥哥
// 有剩余参数的函数
function search() {
    var demand = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        demand[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < demand.length; i++) {
        yy += demand[i];
        if (i < demand.length - 1) {
            yy += ',';
        }
    }
    yy += '的小姐姐';
    return yy;
}
var result = search('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//RegExp  string
// 构造函数声明法
var reg1 = new RegExp("gwbb");
console.log(reg1);
var reg2 = new RegExp("gwbb", 'gi');
console.log(reg2);
// 函数声明法
var reg3 = /gwbb/;
var reg4 = /gwbb/gi;
// 常用方法
// test(string)   exec(string)
var reg5 = /jspang/i;
var website = 'jspang.com';
var result1 = reg5.test(website);
var result2 = reg5.exec(website);
console.log(result1);
console.log(result2);

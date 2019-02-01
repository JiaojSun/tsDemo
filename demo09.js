"use strict";
// 不传递任何参数
var d1 = new Date();
console.log('d1-------------' + d1);
// 传递一个整数
var d2 = new Date(1000000); // 1970-01-01 00:00:00  1000是毫秒
console.log('d1-------------' + d2);
// 传递一个字符串
var d3 = new Date('2018/09/07 05:35:00');
var d4 = new Date('2018-09-07 05:35:00');
var d5 = new Date('2018-09-07T05:35:00');
console.log('d3--d4--d5---------------');
console.log(d3);
console.log(d4);
console.log(d5);
console.log('d3--d4--d5---------------');

"use strict";
/* interface husband{
    sex:string
    interest: string
    buy?:Boolean
}
let myhusband:husband = {sex:'男',interest:'看书做家务',buy:true}

console.log(myhusband); */
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高富帅德', '胖'));

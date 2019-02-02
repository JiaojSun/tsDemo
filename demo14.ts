/* interface husband{
    sex:string
    interest: string
    buy?:Boolean
}
let myhusband:husband = {sex:'男',interest:'看书做家务',buy:true}

console.log(myhusband); */

interface searchMans{
    (source:string,subString:string):boolean
}
let mySearch:searchMans
mySearch = function(source:string,subString:string):boolean{
    let flag = source.search(subString);
    return (flag!=-1)
}

console.log(mySearch('高富帅德','胖'));
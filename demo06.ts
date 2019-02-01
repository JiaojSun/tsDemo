// 1变量的作用域，函数划分
/* function plastic():void{
    var appearance:string = '刘德华'
    console.log(appearance);
}

plastic()
console.log(appearance); */
/* 第一个打印出来，第二个打印出错 */


// 2全局变量局部变量
/* var appearance:string = '刘德华'
function plastic():void{
    console.log('技术胖整形成了'+appearance+'的样子');
}
plastic()
console.log(appearance); */
/* 
技术胖整形成了刘德华的样子
刘德华
 */

// 重名之变量提升超前打印
/* var appearance:string = '刘德华'
function plastic():void{
    console.log('技术胖整形成了'+appearance+'的样子');
    var appearance:string = '马德华'
    console.log('技术胖整形成了'+appearance+'的样子');
}
plastic()
console.log(appearance); */
/* E:\miaov\tsDemo>node demo06.js
技术胖整形成了undefined的样子
技术胖整形成了马德华的样子
刘德华 */

// let
function plastic():void{
    var appearance1:string = '刘德华'
    // console.log('技术胖01整形成了'+appearance2+'的样子');

    {
        // console.log('技术胖02整形成了'+appearance2+'的样子');
        let appearance2:string = '小沈阳'
        console.log('技术胖1整形成了'+appearance2+'的样子');
    }
    console.log('技术胖2整形成了'+appearance1+'的样子');
    // console.log('技术胖3整形成了'+appearance2+'的样子');

}
plastic()

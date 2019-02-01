"use strict";
// 类是对象具体事物的一个抽象，对象是类的具体表现
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log('你好');
    };
    return Person;
}());
var boy = new Person('小明', 18);
console.log(boy);
boy.say();

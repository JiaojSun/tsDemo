// 类是对象具体事物的一个抽象，对象是类的具体表现

class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('你好');
    }
}

let boy:Person = new Person('小明',18)
console.log(boy);
boy.say();
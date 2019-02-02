class PersonC{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let Bob:PersonC = new PersonC('大宝', 18, 'coding')
Bob.interest()

class PersonD extends PersonC{   //继承
   public figure:string = '帅气'
    public interest(){    //重写
        super.interest()
        console.log('建立电商平台');
    }
    public earn(){
        console.log('一天赚了一个亿')
    }
}

let perD= new PersonD('小宝',5,'演讲')

perD.interest();
perD.earn();

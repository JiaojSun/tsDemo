namespace man1{
    export class Dehua{
        public name:string = "刘德华"
        talk(){
            console.log("我是帅哥刘德华");
        }
    }
}

namespace man2 {
    export class Dehua {
        public name: string = "马德华"
        talk() {
            console.log("我是二师兄马德华");
        }
    }
}

let dehua1:man1.Dehua = new man1.Dehua();
let dehua2:man2.Dehua = new man2.Dehua();
dehua1.talk();
dehua2.talk();

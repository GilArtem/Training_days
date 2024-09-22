// Также декораторы могут изменять результат работы конструктора. 
// В этом случае определение функции декоратора немного меняется, 
// но она также в качестве параметра принимает конструктор класса:

function logger<TFunction extends Function>(target: TFunction): TFunction{
 
    let newConstructor: Function = function(name:string){
        console.log("Creating new instance");
        this.name = name;
        this.age = 23;
        this.print = function():void{
            console.log(this.name, this.age);
        }
    }
    return <TFunction>newConstructor;
}

@logger
class User3 {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print(): void{
        console.log(this.name);
    }
}

let tomy = new User3("Tomy");
let bob = new User3("Bob");
tomy.print();
bob.print();

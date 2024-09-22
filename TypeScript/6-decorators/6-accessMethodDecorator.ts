// Декоратор метода доступа принимает три параметра:

function decorator(target: Object, propertyName: string, descriptor: PropertyDescriptor){ 
    // код декоратора
}
// Первый параметр представляет конструктора класса для статического метода, либо прототип класса для обычного метода.
// Второй параметр представляет название метода.
// Третий параметр представляет объект PropertyDescriptor.

// ПРИМЕР!
// Декоратор validator переопределяет поведение сеттера с помощью свойства descriptor.set
function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
  
    descriptor.set = function(value: string) {
        // Если передаваемое сеттеру значение представляет строку "admin", то генерируется ошибка.
        if (value === "admin") {
            throw new Error("Invalid value");
        }
        if(oldSet!==undefined) oldSet.call(this, value);
    }
}

class User7 {  
    private _name: string;
    constructor(name: string){
        this.name = name;
    }
      
    public get name(): string {
        return this._name;
    }
    
    // ВАЖНО! Декоратор достаточно применить только к геттеру или к сеттеру, 
    // в любом случае он будет сразу применяться к обоим аксессорам.
    @validator
    public set name(n: string) {
        this._name = n;
    }
}

let art = new User7("art");
console.log(art.name);
art.name= "admin";
console.log(art.name);
// Создаем класс User
class User{
    name: string;
    // При оределении полей мы можем задавать начальные значения
    age: number = 0;
    // Также мы можем установить поля только для чтения:
    readonly nationality: string = 'Russian';


    // Конструктор (для начальной инициализации объекта)
    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    // Методы класса 
    speak(): void{
        console.log( `You know my name! No? I'm ${this.name}`);
    }
    do(): string{
        return `I'm steel running!`;
    }

};

// Создаем объект класса 
// let artem: User = new User();

// После введения конструктора объявление объекта выглядит так:
let artem: User = new User('Artem', 26);

artem.name = 'Artem Gil';
//artem.age = 27;

console.log(`Name: ${artem.name} and Age: ${artem.age}`);

artem.speak();
console.log(artem.do());

//artem.nationality = 'Anythink';  // Ошибка! Поле только лля чтения!
console.log(artem.nationality);
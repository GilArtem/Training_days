
class Senior {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}

class Emplo extends Senior {
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}

//// ПРИМЕР1 восходящего преобразования, то есть преобразования от более конкретного типа к более общему 
// - от призводного типа Emplo к базовому типу Senior.
function printSenior(user: Senior): void{
    console.log(`Senior ${user.name}`);
}

function personFactory(userName: string): Senior {
    return new Emplo(userName, "не установлено");
}

let bob: Senior = new Emplo('Bob', 'DODO');
printSenior(bob); // Senior Bob

let bobby = personFactory('Bobby');
printSenior(bobby); // Senior Bobby

//// ПРИМЕР2 от нисходящего, или от более общего типа к более конкретному
let tommy: Senior = new Emplo('Tommy', 'MS');
// console.log(tommy.company); // ошибка - в классе Senior нет свойства company

//// НАМ НУЖНО ЯВНO ПРЕОБРАЗОВАТЬ ОБЪЕКТ К ТИПУ EMPLO:
// Выражение <Тип> переменная позволяет преобразовать переменную к типу, который идет в угловых скобках.
let tommyEmplo: Emplo = <Emplo>tommy; // преобразование к типу Emplo
console.log(tommyEmplo.company); // MS
// или таким образом
console.log((<Emplo>tommy).company);


// Другой способ осуществить явное преобразование типов представляет применение оператора as:
let tommyEmploAs: Emplo = tommy as Emplo; // преобразование к типу Emplo
console.log(tommyEmploAs.company);
// или таким образом
console.log((tommy as Emplo).company);



//// Интерфейсы в преобразаниях типов
// Все сказанное в отношении преобразования классов будет справедливо и для преобразования интерфейсов. 
// Но есть нюанс 
// Допустим интерфейс IInter никак не связан с классами Senior и Emplo

interface IInter {
    name: string;
}

function printSenior2(user: IInter): void{
    console.log(`IInter ${user.name}`);
}

let zuma: Senior = new Emplo('Zuma', 'MS');
printSenior2(zuma);

printSenior2({ name: 'Samuel' });
//printSenior2({ name: "Tolya", company: "MS" });  // Ошибка!

// Применяем преобразование типов
printSenior2({ name: 'Tolya', company: "MS" } as IInter);


//// Оператор instanceOf
let tolya = new Emplo('Tolya', 'MS');
if (tolya instanceof Senior) console.log('Tolya is a Senior');
else console.log('Tolya is not a Person');


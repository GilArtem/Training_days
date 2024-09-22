function add(a: number, b: number): number {
    return a + b;
}

let result = add(13, 13);
console.log(result);
//add("0", "31"); // Ошибка


// Если функция ничего не возвращает, то указываем : void
function multiply(a: number, b: number): void {
    console.log(a ** b);
}

multiply(13, 3);

// Чтобы  иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные.
function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let liza = getName('Liza', 'Sergeeva');
let artem = getName('Atrem');

console.log(liza);
console.log(artem);


// Передача значения по-умолчанию:
// Причем в качестве значения можно передавать результат другого выражения:

function defaultLastNum(): number{
    return 113;
}
 

let name1 = getName("Tom");
console.log(name1); // Tom Smith

function giveMeNum(firsNum: number, lastNum: number = 13, thirdNum: number = defaultLastNum()){
    return firsNum + 10000 + lastNum + thirdNum;
}

let num1 = giveMeNum(9);
let num2 = giveMeNum(3, 1);

console.log(num1);
console.log(num2);


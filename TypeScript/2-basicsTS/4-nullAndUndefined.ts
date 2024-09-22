//let x: number = undefined; // Ошибка!
//console.log(x);

//x = null; Ошибка!
//console.log(x);

//x = 5;
//console.log(x);


// Однако возникают ситуации, когда мы не знаем , имеет ли какая-то переменная или параметр функции или конкретное значение или оно отсутствует
// Для этого пригодится union
let userId: number|null = null;

function printIds(id: number|null){
    if(id === null) {
        console.log('пользователь отсутствует');
    } else {
        console.log(`id пользователя: ${id}`);
    }
}

printIds(userId); // пользователь отсутвует

userId = 37;
printIds(userId); // id пользователя: 37



// ОПЕРАТОР !
// позволяет указать, что объект не представляет значение null и undefined
// Рекомендуется применять, когда мы знаем, что объект не равен null или undefined

const header: HTMLElement|null = document.getElementById("header");

// header.innerText = 'Hello TS';  // Ошибка - header имеет значение null
header!.innerText = 'Hello TS';   // тут все ок 

// А в этом случе все ровно сгенерирует ошибку
// const header: HTMLElement|null = null;
// header!.innerText = "Hello Typescript!";


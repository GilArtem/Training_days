//// Массивы [] или Array<> являются строго типизированными. 
// То есть если изначально массив содержит строки, 
// то в будущем он сможет работать только со строками.

let list: number[] = [1, 2, 3];
let colors: Array<string> = ['green', 'orange', 'white'];

console.log(list[0]);
console.log(colors[2]);

//// READONLYARRAY
// Запрещает проведение любых манипуляций с массивом (абсолютно любых по его изменению!)
const pep1: ReadonlyArray<string> = ['tom', 'gash', 'loh'];

// По чтению опреации выполнять можно 
function eterUsers(users: readonly string[]){
    for(const user of users){
        console.log(user);
    }
}

function usersToString(users: readonly string[]): String{
    return users.join(', ');
}

eterUsers(pep1);
console.log(usersToString(pep1));


//// ДЕКОМПОЗИЦИЯ МАССИВОВ
const pep2: readonly string[] = ['ray', 'katy', 'lola'];

// Здесь константа first принимает первый элемент массива - "Tom". Все оставшиеся элементы кортежа будут помещаться в массив rest.
const [first, ...rest] = pep2;

console.log(first);
console.log(rest[0]);
console.log(rest[1]);

// Также мы можем пропускать элементы
const nums: number[] = [1, 2, 3, 4];
const[, second, ,forth] = nums;

console.log(second); // 2
console.log(forth); // 4

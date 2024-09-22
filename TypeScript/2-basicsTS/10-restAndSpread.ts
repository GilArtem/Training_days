//// Неопределенный набор параметров
function addNumbers (fNum: number, ...numArray: number[]): number {
    let result = fNum; 
    for (let i = 0; i < numArray.length; i++) {
        result += numArray[i];
    }
    return result;
}

let nums1 = addNumbers(3, 1, 4, 5);
console.log(nums1); 


//// Наполнение параметров
function summator(...args: number[]): number {
    let result = 0;

    for(let i = 0; i < args.length; i++) {
        result += args[1];
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5] as const;
let num = summator(...numbers);
console.log(num);
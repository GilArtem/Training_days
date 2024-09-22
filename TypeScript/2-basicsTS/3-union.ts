// Или объединение, позволяет задавть несколько типов данных для переменной
// Тип union подходит для тех ситуаций, когда логика работы со всеми объединенными 
// типами однообразна, например, как в случае выше, где значение извне встраивается в строку 
// и выводится на консоли. Вне зависимости от типа действия одинаковы.

function printId(id: number | string){
    console.log(`Id: ${id}`);
}

let id: string | number = 'art13';

printId('2j3j4j5k');
printId(1313);
printId(id);


// Если логика отличается в зависимости от переданного типа, тогда:
function printSentence(word: string[] | string){
    // word - строка
    if (typeof word === 'string'){
        console.log(word);
    } else {
        // если массив string[]
        console.log(word.join(' '));
    }
}

printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");
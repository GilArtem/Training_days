function printId(id) {
    console.log("Id: ".concat(id));
}
var id = 'art13';
printId('2j3j4j5k');
printId(1313);
printId(id);
function printSentence(word) {
    if (typeof word === 'string') {
        console.log(word);
    }
    else {
        console.log(word.join(' '));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");

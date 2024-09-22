function printId2(inputId) {
    console.log("Id: ".concat(inputId));
}
function getId(isNumber) {
    if (isNumber)
        return 1;
    else
        return '1';
}
printId2(1234);
printId2('bfieb');
console.log(getId(false));
var dima = { name: "Dima", age: 33 };
var vova = { name: 'Vova', age: 55 };
function printPerson(user) {
    console.log("name: ".concat(user.name, " age: ").concat(user.age));
}
printPerson(dima);
printPerson(vova);
var beba = { name: "Beba", age: 44 };
var buba = { name: 'Buba', age: 33, company: 'RosTeg' };
function printThis(user) {
    console.log("name: ".concat(user.name, " age: ").concat(user.age));
}
printThis(beba);
printThis(buba);

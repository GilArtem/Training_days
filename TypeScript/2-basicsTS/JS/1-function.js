function add(a, b) {
    return a + b;
}
var result = add(13, 13);
console.log(result);
function multiply(a, b) {
    console.log(Math.pow(a, b));
}
multiply(13, 3);
function getName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var liza = getName('Liza', 'Sergeeva');
var artem = getName('Atrem');
console.log(liza);
console.log(artem);
function defaultLastNum() {
    return 113;
}
var name1 = getName("Tom");
console.log(name1);
function giveMeNum(firsNum, lastNum, thirdNum) {
    if (lastNum === void 0) { lastNum = 13; }
    if (thirdNum === void 0) { thirdNum = defaultLastNum(); }
    return firsNum + 10000 + lastNum + thirdNum;
}
var num1 = giveMeNum(9);
var num2 = giveMeNum(3, 1);
console.log(num1);
console.log(num2);

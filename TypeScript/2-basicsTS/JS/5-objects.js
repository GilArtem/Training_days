var person1 = { name: 'Artem', age: 27 };
var person2 = { name: "Liza", age: 25 };
person1 = { name: 'ARTEM', age: 13 };
var person3;
person3 = { name: "Julyen" };
console.log(person3);
console.log(person3.age);
person3 = { name: 'Zaruba', age: 123 };
console.log(person3);
function printUser(user) {
    console.log("name: ".concat(user.name, ", age: ").concat(user.age));
}
var atrey = { age: 36, name: "Atrey" };
printUser(atrey);
var artam = { name: "Artam", age: 14, isMarried: false };
printUser(artam);
function defaultObj() {
    return { name: 'Tom', age: 12 };
}
var user1 = defaultObj();
console.log("name: ".concat(user1.name, ", age: ").concat(user1.age));
function printUser2(_a) {
    var name = _a.name, age = _a.age, _b = _a.job, job = _b === void 0 ? "IT" : _b;
    if (age !== undefined) {
        console.log("name: ".concat(name, " age: ").concat(age, ", job: ").concat(job));
    }
    else {
        console.log("name: ".concat(name, ", job: ").concat(job));
    }
}
var cratos = { name: "Cratos" };
printUser2(cratos);
var bob = { name: "Bob", age: 24, job: 'GOVNOVOZ' };
printUser2(bob);

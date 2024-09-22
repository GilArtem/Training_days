var inf = ['rot', 13];
console.log(inf[0]);
inf[0] = 'tor';
console.log(inf[0]);
for (var _i = 0, inf_1 = inf; _i < inf_1.length; _i++) {
    var prop = inf_1[_i];
    console.log(prop);
}
function printUser9(user) {
    console.log(user[0]);
    console.log(user[1]);
}
var tom = ["Tom", 36];
printUser9(tom);
function createUser(name, age) {
    return [name, age];
}
var user = createUser("Bob", 41);
console.log(user[0]);
console.log(user[1]);
var bob9 = ["Bob", 41, true];
var tom9 = ["Tom", 36];
var math = ["Math", 5, 4, 5, 4, 4];
var physics = [5, 5, 5, "Physics"];
var chemistry = ["Chemistry", 3, 3, 4, 5, false];

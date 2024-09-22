function sum(x, y) {
    return x + y;
}
function multy(a, b) {
    return a * b;
}
var op;
op = sum;
console.log(op(2, 13));
op = multy;
console.log(op(2, 2));
function mathOp(x, y, opa) {
    return opa(x, y);
}
console.log(mathOp(10, 23, sum));
console.log(mathOp(10, 10, multy));
function mathOps(x, y, ops) {
    return ops(x, y);
}
var summa = function (x, y) {
    return x + y;
};
console.log(mathOps(10, 20, summa));
var func1 = function (x, y) { return x + y; };
var func2 = function (x) { return Math.pow(x, 2); };
var func3 = function () { return 'Hi'; };
console.log(func1(13, 17));
console.log(func2(3));
console.log(func3());
function func4(x, y, operation) {
    var result = operation(x, y);
    return result;
}
console.log(func4(10, 20, function (x, y) { return x + y; }));
console.log(func4(10, 20, function (x, y) { return x * y; }));

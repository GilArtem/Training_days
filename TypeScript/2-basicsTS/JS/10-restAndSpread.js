function addNumbers(fNum) {
    var numArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numArray[_i - 1] = arguments[_i];
    }
    var result = fNum;
    for (var i = 0; i < numArray.length; i++) {
        result += numArray[i];
    }
    return result;
}
var nums1 = addNumbers(3, 1, 4, 5);
console.log(nums1);
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        result += args[1];
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5];
var num = summator.apply(void 0, numbers);
console.log(num);

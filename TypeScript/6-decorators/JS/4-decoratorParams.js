var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function readableTo(onlyRead) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = !onlyRead;
    };
}
var User4 = (function () {
    function User4(name) {
        this.name = name;
    }
    User4.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        readableTo(true)
    ], User4.prototype, "print", null);
    return User4;
}());
var toma = new User4("Toma");
toma.print = function () { console.log("print has been changed"); };
toma.print();
function log(target, method, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(JSON.stringify(args));
        var returnValue = originalMethod.apply(this, args);
        console.log("".concat(JSON.stringify(args), " => ").concat(returnValue));
        return returnValue;
    };
}
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    __decorate([
        log
    ], Calculator.prototype, "add", null);
    return Calculator;
}());
var calc = new Calculator();
var z = calc.add(4, 5);
z = calc.add(6, 7);
function MyParameterDecorator(target, propertyKey, parameterIndex) {
}
function logParameter(target, key, index) {
    var metadataKey = "__log_".concat(key, "_parameters");
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var metadataKey = "__log_".concat(key, "_parameters");
        var indices = target[metadataKey];
        if (Array.isArray(indices)) {
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log("".concat(key, " arg[").concat(i, "]: ").concat(argStr));
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(function (a) { return (JSON.stringify(a) || a.toString()); }).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: ".concat(key, "(").concat(a, ") => ").concat(r));
            return result;
        }
    };
    return descriptor;
}
var User5 = (function () {
    function User5(name) {
        this.name = name;
    }
    User5.prototype.setName = function (name) {
        this.name = name;
    };
    User5.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        logMethod,
        __param(0, logParameter)
    ], User5.prototype, "setName", null);
    return User5;
}());
var toms = new User5("Tom");
toms.setName("Bob");
toms.setName("Sam");

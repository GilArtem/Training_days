var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ex1 = (function () {
    function Ex1() {
    }
    return Ex1;
}());
;
var Ex2 = (function () {
    function Ex2() {
    }
    return Ex2;
}());
;
var Ex3Private = (function () {
    function Ex3Private(prop1, prop2) {
        this._prop1 = prop1;
        this._prop2 = prop2;
    }
    Ex3Private.prototype.printPub = function () {
        console.log("PROP1: ".concat(this._prop1, "  PROP2: ").concat(this._prop2));
    };
    Ex3Private.prototype.setTimePriv = function (prop2) {
        return new Date().getFullYear() - prop2;
    };
    return Ex3Private;
}());
var ex3 = new Ex3Private('Any', 13);
ex3.printPub();
var Ex4Prot = (function () {
    function Ex4Prot(name, age) {
        this.name = name;
        this.year = this.setYear(age);
    }
    Ex4Prot.prototype.printEx4Prot = function () {
        console.log("NAME: ".concat(this.name, " YEAR: ").concat(this.year));
    };
    Ex4Prot.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Ex4Prot;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Child.prototype.printChild = function () {
        this.printEx4Prot();
        console.log("COMPANY: ".concat(this.company));
    };
    return Child;
}(Ex4Prot));
var man = new Child('Sam', 32, 'MS');
man.printChild();
var Ex5 = (function () {
    function Ex5(name, age) {
        this.name = name;
        this.age = age;
    }
    Ex5.prototype.printEx5 = function () {
        console.log("\u0418\u043C\u044F: ".concat(this.name, "  \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(this.age));
    };
    return Ex5;
}());

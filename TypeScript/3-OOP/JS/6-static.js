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
var Stat = (function () {
    function Stat(name, age) {
        this.name = name;
        this.age = age;
    }
    Stat.calcul = function (age) {
        return Stat.retire - age;
    };
    Stat.retire = 65;
    return Stat;
}());
var kem = new Stat('Kem', 22);
var year = Stat.calcul(22);
console.log(Stat.retire);
console.log("\u0414\u043E \u043F\u0435\u043D\u0441\u0438\u0438 ".concat(year, " \u043B\u0435\u0442"));
var newStat = (function (_super) {
    __extends(newStat, _super);
    function newStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return newStat;
}(Stat));
;
var u = newStat.calcul(33);
console.log(u);
console.log(newStat.retire);

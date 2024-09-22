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
var Senior = (function () {
    function Senior(userName) {
        this.name = userName;
    }
    return Senior;
}());
var Emplo = (function (_super) {
    __extends(Emplo, _super);
    function Emplo(userName, company) {
        var _this = _super.call(this, userName) || this;
        _this.company = company;
        return _this;
    }
    return Emplo;
}(Senior));
function printSenior(user) {
    console.log("Senior ".concat(user.name));
}
function personFactory(userName) {
    return new Emplo(userName, "не установлено");
}
var bob = new Emplo('Bob', 'DODO');
printSenior(bob);
var bobby = personFactory('Bobby');
printSenior(bobby);
var tommy = new Emplo('Tommy', 'MS');
var tommyEmplo = tommy;
console.log(tommyEmplo.company);
console.log(tommy.company);
var tommyEmploAs = tommy;
console.log(tommyEmploAs.company);
console.log(tommy.company);
function printSenior2(user) {
    console.log("IInter ".concat(user.name));
}
var zuma = new Emplo('Zuma', 'MS');
printSenior2(zuma);
printSenior2({ name: 'Samuel' });
printSenior2({ name: 'Tolya', company: "MS" });
var tolya = new Emplo('Tolya', 'MS');
if (tolya instanceof Senior)
    console.log('Tolya is a Senior');
else
    console.log('Tolya is not a Person');

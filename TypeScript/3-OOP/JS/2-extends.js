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
var Person = (function () {
    function Person(personName, personJob) {
        this.job = 'IT';
        this.name = personName;
        this.job = personJob;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name, " and i am ").concat(this.job, " professional"));
    };
    return Person;
}());
;
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, job, company) {
        var _this = _super.call(this, name, job) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    Employee.prototype.introduce = function () {
        _super.prototype.introduce.call(this);
        console.log('Hello from Employee class!!');
    };
    return Employee;
}(Person));
;
var gil = new Employee('Artem Gil', 'Node.js developer', 'Google');
gil.introduce();
gil.company = 'Google';
gil.work();
var atrey = new Person('Atrey', 'God');
atrey.introduce();

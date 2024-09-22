var Persona1;
(function (Persona1) {
    var Employee = (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Persona1.Employee = Employee;
    function work(emp) {
        console.log(emp.name, "is working!");
    }
    Persona1.work = work;
    Persona1.defaultUser = { name: 'Artem' };
    Persona1.value = 'Hello';
})(Persona1 || (Persona1 = {}));
;
var artem = new Persona1.Employee('Artem Gil');
Persona1.work(artem);
console.log(Persona1.defaultUser.name);
console.log(Persona1.value);

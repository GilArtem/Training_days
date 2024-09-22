var User = (function () {
    function User(userName, userAge) {
        this.age = 0;
        this.nationality = 'Russian';
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.speak = function () {
        console.log("You know my name! No? I'm ".concat(this.name));
    };
    User.prototype.do = function () {
        return "I'm steel running!";
    };
    return User;
}());
;
var artem = new User('Artem', 26);
artem.name = 'Artem Gil';
console.log("Name: ".concat(artem.name, " and Age: ").concat(artem.age));
artem.speak();
console.log(artem.do());
console.log(artem.nationality);

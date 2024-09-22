var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
;
var artem = new User('Artem');
var header = this.document.getElementById('header');
header.innerHTML = 'Hello' + artem.name;

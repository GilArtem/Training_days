function getId(id) {
    return id;
}
var result = getId(5);
console.log(result);
function getGeneralId(id) {
    return id;
}
var res1 = getGeneralId(5);
console.log(res1);
var res2 = getGeneralId("abc");
console.log(res2);
function getString(args) {
    return args.join(', ');
}
var res3 = getString([1, 2, 3, 4]);
console.log(res3);
var Yula = (function () {
    function Yula(id) {
        this._id = id;
    }
    Yula.prototype.getId = function () {
        return this._id;
    };
    return Yula;
}());
var crepe = new Yula(24);
console.log(crepe.getId());
var alice = new Yula("wtf");
console.log(alice.getId());
var Useres = (function () {
    function Useres(id) {
        this._id = id;
    }
    Useres.prototype.getId = function () {
        return this._id;
    };
    return Useres;
}());
function compareName(obj1, obj2) {
    if (obj1.name === obj2.name) {
        console.log('Имена совпадают');
    }
    else
        console.log("Имена различаются");
}
var roy = { name: "Roy" };
var dila = { name: "Dila" };
compareName(roy, dila);
var Pep = (function () {
    function Pep(name, age) {
        this.name = name;
        this.age = age;
    }
    return Pep;
}());
var wow = new Pep('Wow', 13);
var bobic = new Pep('Bobe', 24);
compareName(wow, bobic);
var pape = { id: 1, name: "Reno" };
var reno = { id: 2, name: "Reno" };
compareName(pape, reno);
function funke(obj1, obj2) {
    if (obj1.name === obj2.name)
        console.log('Имена совпадают');
    else
        console.log('Имена различаются');
}
var NameInfo = (function () {
    function NameInfo() {
    }
    NameInfo.prototype.printName = function (obj) {
        console.log("Name: ".concat(obj.name));
    };
    return NameInfo;
}());
var Buz = (function () {
    function Buz(name, age) {
        this.name = name;
        this.age = age;
    }
    return Buz;
}());
var lee = new Buz('Lee', 189);
var nameInfo1 = new NameInfo();
nameInfo1.printName(lee);
var tang = { id: 23, name: 'Tang' };
var nameInfo2 = new NameInfo();
nameInfo2.printName(tang);
function userFactory(type) {
    return new type();
}
var Sox = (function () {
    function Sox() {
        console.log("создан объект User");
    }
    return Sox;
}());
var user = userFactory(Sox);

class User{
    name: string;
    constructor(_name:string){
        this.name = _name;
    }
};

const artem : User = new User('Artem');
const header = this.document.getElementById('header');

header.innerHTML = 'Hello' + artem.name;
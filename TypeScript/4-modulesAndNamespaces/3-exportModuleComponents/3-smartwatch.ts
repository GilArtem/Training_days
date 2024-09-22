export default class SmartWatch{
      
    constructor(private model:string){}
     
    printModel(){
        console.log(`Model: ${this.model}`);
    }
}

// Ключевое слово default позволяет установить класс SmartWatch в качестве типа по умолчанию. 
// И затем мы можем импортировать его следующим образом:
// смотри в 2-someone.ts
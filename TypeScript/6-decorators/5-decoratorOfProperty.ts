//// ДЕКОРАТОРЫ СВОЙСТВ
// Декоратор свойства представляет функцию, которая принимает два параметра:

function MyPropertyDecorator(target: Object, propertyKey: string){
    // код декоратора
}
// Первый параметр представляет конструктор класса, если свойство статическое, либо прототип класса, если свойство нестатическое. 
// А второй параметр представляет имя свойства.

// простейший декоратор для свойства:
// Декоратор format выполняет небольшое форматирование значение свойства.
function format():Function {
    //  получаем значение свойства
    return function(target: Object, propertyKey: string) { 
      let value : string;

      // Создаем геттер, который возвращает отформатированное значение.
      const getter = function() {
        return "Mr./Ms." + value;     // изменяем возвращаемое значение
      };

      // определяется сеттер, который устанавливает новое значение для свойства.
      const setter = function(newVal: string) {
        // инспектируем, как устанавливается свойство.
         if(newVal.length > 2) {   // добавляем проверку на длину строки
            value = newVal;
        }     
      }; 

      // устанавливает геттер и сеттер для свойства
      Object.defineProperty(target, propertyKey, {    
        get: getter,
        set: setter
      });
    }
  }
   
  class User6 {
    
      @format()
      name: string;
      constructor(name: string){
          this.name = name;
      }
      print():void{
          console.log(this.name);
      }
  }
  let ron = new User6("Tom");
  ron.print();
  ron.name = "Tommy";
  ron.print();
  ron.name = "To";
  ron.print();
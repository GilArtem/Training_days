//// Методы управления обработчиками событий:

// - on(eventName, listener): 
//   Псевдоним метода on(). 
//   Регистрирует новый новый слушатель listener для события eventName.

// - addListener(eventName, listener):
//   Псевдоним метода on(). 
//   Регистрирует новый слушатель listener сдля события eventName.

// - emit(eventName[, args]):
//   запускает событие.
//   В качестве обязательного параметра принимает имя события. 
//   Также дополнительно можно передать необязательный параметр - аргументы для обработчика события

// - eventNames():
//   возвращает массив с именами событий, для которых зарегистрированы слушатели
  
// - getMaxListeners():
//   возвращает максимальное количество слушателей для данного эмиттера событий.

// - listenerCount(eventName):
//   возвращает количество слушателей события eventName

// - listeners(eventName):
//   возвращает массив со слушателями события eventName.

// - once(eventName, listener):
//   регистрирует новый слушатель listener для события eventName, но выполняет его не более одного раза.

// - prependListener(eventName, listener):
//   регистрирует новый слушатель listener для события eventName и помещает его в начало массива слушателей события eventName.

// - prependOnceListener([eventName]):
//   аналогичен prependListener() за тем исключением, что слушатель listener вызывается не более одного раза.

// - removeAllListeners([eventName]):
//   удаляет всех слушателей события eventName

// - removeListener(eventName, listener):
//   удаляет слушателя listener для события eventName.

// - setMaxListeners(n):
//   устанавливает максимальное количество слушателей событий, которые можно зарегистрировать для каждого события в эмиттере событий



//// Работаем
const EventEmitter = require('events');

// 1. определяем эмиттер событий
const emitter = new EventEmitter();

// 2. присваиваем имя события, которе будет обрабатываться
const eventName = 'greet';

// 3. регистрируем обработчик для события 'greet'. Можно установить несколько обработчиков на одно событие:
emitter.on(eventName, function(){
    console.log('Hello! | !olleH');
});

emitter.on(eventName, function(){
    console.log('Привет! | !тевирП');
});

emitter.on(eventName, function(){
    console.log('Хай! | !йаХ');
});
// 4. генерируем событие greet
emitter.emit(eventName);





//// Передача параметров событию
const emitter2 = new EventEmitter();
const eventName2 = 'greet';

emitter2.on(eventName2, function(data) {
    console.log(data);
});

emitter2.emit(eventName2, 'Здарова, заебал!');




//// Наследование от EventEmitter
// 1. Наследование
const emitter3 = new EventEmitter();
const eventName3 = 'greet';

emitter3.on(eventName3, function(data){
    console.log(data);
});

class User extends EventEmitter {
    constructor(username) {
        super(); // Вызываем конструктор EventEmitter
        this.name = username;
    }

    sayHi() {
        console.log('Привет! Меня зовут', this.name);
        this.emit(eventName3, this.name);  // генерируем событие, передаем обработчику имя
    }
};

const artem = new User('Artem');
// добавляем к объекту artem обработку события "greet"
// обработчик ожидает получить через параметр имя пользователя
artem.on(eventName3, function(username){
    console.log('Привте,', username);
});

//  при выполнении метода генерируется событие "greet"
artem.sayHi();


// 2. Передача объекта EventEmitter в другой объект (альтернатива  1.)
const emitter4 = new EventEmitter();
const eventName4 = 'greet';

emitter4.on(eventName4, function(username) {
    console.log('Салют', username);
});

class User2 {
    constructor(username, emitter){
        this.name = username;
        this.emitter = emitter;
    }

    sayHi(){
        console.log('Салют блять. Мое имя', this.name);
        this.emitter.emit(eventName4, this.name); // генерируем событие, передаем обработчику имя
    }
};

const artem4 = new User2('Artem', emitter4);
artem4.sayHi();
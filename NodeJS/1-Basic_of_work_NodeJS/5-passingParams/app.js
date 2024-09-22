// Передаем параметры приложения через терминал 
const nodePath = process.argv[0];
const appPath = process.argv[1];
const userName = process.argv[2];
const userAge = process.argv[3];

console.log('nodePath:', nodePath);
console.log('appPath:', appPath);
console.log();
console.log('name:', userName);
console.log('age:', userAge);

// В данном случае мы ожидаем, что приложению будут переданы два параметра: name и age.
// Далее запустим приложение в терминале таким образом `node app.js Artem 27`
// Вывод:
/*

nodePath: /usr/local/bin/node
appPath: /Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/3-metanitCourse/05-passing-params/app.js

name: Artem
age: 27 

*/
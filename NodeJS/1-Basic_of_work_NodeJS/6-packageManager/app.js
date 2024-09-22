// Установим и воспользуемся пакетом из npm - lodash
const lodash = require('lodash');

const peoples = ['Artem', 'Liza', 'Any'];
const employees = ['Artem', 'Liza', 'Body'];

// объединяем массивы - в результате получим только уникальные значения 
const resultUnion = lodash.union(peoples, employees);
console.log(resultUnion); // [ 'Artem', 'Liza', 'Any', 'Body' ]

// пересечение массивов - в результате только общие значения
const resultIntersection = lodash.intersection(peoples, employees);
console.log(resultIntersection); // [ 'Artem', 'Liza' ]
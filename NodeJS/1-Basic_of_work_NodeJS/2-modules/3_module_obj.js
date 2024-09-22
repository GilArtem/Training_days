// С помощью специального объекта module мы можем получить инфрмацию о модуле

console.log(module);

/*

{
  id: '.',
  path: '/Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/3-metanitCourse/02-modules',
  exports: {},
  filename: '/Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/3-metanitCourse/02-modules/3_module_obj.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/3-metanitCourse/02-modules/node_modules',
    '/Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/3-metanitCourse/node_modules',
    '/Users/gilart/Desktop/Sobes/Шпоры/Код NodeJS/node_modules',
    '/Users/gilart/Desktop/Sobes/Шпоры/node_modules',
    '/Users/gilart/Desktop/Sobes/node_modules',
    '/Users/gilart/Desktop/node_modules',
    '/Users/gilart/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

*/

// Здесь мы видим, что объект module содержит ряд свойств, которые позволяют получить каталог и путь к файлу текущего модуля, 
// а также пути, где будет идти поиск модулей.
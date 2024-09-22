// Несмотря на то, что нет такого файла как "messages.js", 
// но если в проекте есть каталог "messages", который содержит файл с именем index.js, 
// то мы можем обращаться к модулю по имени каталога, как в данном случае.

const messages = require('./messages');

messages.getMorningMessage(); // Доброе утро
messages.getEveningMessage(); // Добрый вечер
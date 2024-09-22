const WebSocket = require('ws');
const server = new WebSocket.Server({ port:3000 });

//  с помощью метода on() добавляем серверу для события "connection", 
// которое срабатывает при подключении нового клиента, обработчик - функцию onConnect.
server.on("connection", onConnect);

// Обработчик подключения клиента
// параметр - подключенный клиент
function onConnect(client){
    console.log('Подключение выполнено!');

    // Обработка входящих сообщений от клиента:
    client.on('message', (message) => {
        console.log('Сообщение клиента: ', message.toString());  // для диагностики сообщения клиента на консоль

        client.send('Привет, клиент!');  // отправка ответного сообщения клиенту
    });

    // Закрываем подключение:
    client.on('close', () => {
        console.log('Подключение закрыто!');
    });
};

console.log('Сервер запущен на порту 3000');


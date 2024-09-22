// Прослушиваем событие message
self.addEventListener('message', (event) => {
    // Выводим полученные из основного потока данные
    console.log(`[Worker] Message received: ${event.data}`);
    // Отправляем в ответ основному потоку некотррое сообщение:
    self.postMessage("Hello main thread");
});
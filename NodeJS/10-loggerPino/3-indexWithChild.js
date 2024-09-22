const logger = require('./0-logger');

logger.info('Запуск программы');

function getUser(userId) {
    const childLogger = logger.child({ userID });
    childLogger.trace('getUser запущен');

    // получить данные прльзователя и вернуть их из функции

    childLogger.trace('getUser завершен');
}

userID = 'Gil';
getUser(userID);

logger.info('Завершение программы');

// Выполните этот код с установленным минимальным уровнем логирования trace:
// `PINO_LOG_LEVEL=TRACE node indexWithChild.js`
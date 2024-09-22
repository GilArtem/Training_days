const logger = require('./0-logger');

logger.level = 'debug'; // после этого будут отбрасываться только сообщения 
                        // уровня trace

logger.info('Привет, Пино');

logger.fatal('fatal');
logger.error('error');
logger.warn('warn');
//logger.notice('notice');  // созданный нами уровень события
logger.info('info');  // По-умолчанию подавляет события более низкого уровня
logger.debug('debug');
logger.trace('trace');

logger.error(
    { transaction_id: '12343_ff', user_id: 'ivanov' },
    'Транзакция провалилась'
);
// Результат:
// {"level":"ERROR","timestamp":2024-09-17T10:40:52.290Z,"mypid":7514,"myhost":"MacBook-Pro-MasVook-2.local","node_v":"v20.10.0","transaction_id":"12343_ff","user_id":"ivanov","msg":"Транзакция провалилась"}
const pino = require('pino');
const levels1 = { 
    notice: 35, // добавляется уровень notice, более серьёзный, нежели info, но менее серьёзный, нежели warn
};

const levels = {
    emerg: 80,
    alert: 70,
    crit: 60,
    error: 50,
    warn: 40,
    notice: 30,
    info: 20,
    debug: 10,
};

// module.exports = pino({
//     // прописываем минимальный уровень логгирования
//     level: process.env.PINO_LOG_LEVEL || 'info',
//     customLevels: levels,
//     // Используем только кастомные уровни
//     useOnlyCustomLevels: true,
// });

module.exports = pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    formatters: {
        // Переопределяем имена pid (ID процесса) и hostname
        
        // Также можно удалять или добавлять любые поля (node_v)
        // Еще это могут быть записи лога, версия приложения, имя операционной системы, элементы конфигурации, хэш коммита гита и т. д.
        bindings: (bindings) => {
            return { mypid: bindings.pid, 
                     myhost: bindings.hostname,
                     node_v: process.version,
                    };
        },

        level: (label) => {
            // Возвращаемуму level можно дать любое название для отображения
            return { level: label.toUpperCase() };
        },
    },

    // Настройка временного формата 
    timestamp: pino.stdTimeFunctions.isoTime,

    // Переименовываем time на timestamp
    timestamp: () => `,"timestamp":${new Date(Date.now()).toISOString()}`,
});


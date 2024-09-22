// [DONE]      заменить alert на document.write (красиво оформить)
// [...]       заменить prompt на ввод ответа пользователя внутри страницы 

// [DONE]      вывести итоговое количество правильных и неправильных ответов 
// [DONE]      для этого нужно воспользоваться методом push, чтобы создать два массива и из них выводить итоговую инфу 
// [DONE]      собрать ответы пользователя в отдельный массив, чтобы показать, что он ответил и что нужно было ответить 

// [DONE]      проработать бальную систему оценивания (либо вывод оценок, либо вывод процента правильных ответов и соответсвующий комментарий)
// [...]       этой программе можно добавить html & css 
// [DONE]      убрать чувствительность к регистру 

// ==================== functions

function showHalloMessage(_notificationMessages) {
    document.write(_notificationMessages.start.hello, '<br><br>');
}

function startTraining(_words) {
    for (let i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].origin).toLowerCase(); 
        //let userAnswer = document.getElementById('userInputField').value;
        document.write(userAnswer === _words[i].translate, '<br><br>'); // true/false заменить? удалить?
        if (userAnswer === _words[i].translate) {
            trueAnswers.push(_words[i].origin + ' - ' + userAnswer + ';')
        } else {
            falseAnswers.push(_words[i].origin + ' - ' + userAnswer + ' (Правильный ответ: ' + _words[i].translate + ')' + ';') // capitalize 
        }
    }
}

function getPercentage(_trueAnswers, _words) {
    return _trueAnswers.length / _words.length * 100;
}

function showResult(_words, _settings, _notificationMessages) {
    const userCorrectAnswerPercent = getPercentage(trueAnswers, words);

    if (userCorrectAnswerPercent > settings.correctAnswersMinPercent) {
        document.write(notificationMessages.result.finishSuccess, Math.round(getPercentage(trueAnswers, words)) + '%','<br><br>')
    } else {
        document.write(notificationMessages.result.finishUnSuccess, Math.round(getPercentage(trueAnswers, words)) + '%', '<br><br>')
    }
} 
 
function showTrueAnswers(_trueAnswers) {
    for (let i = 0; i < _trueAnswers.length; i++) {
        document.write(_trueAnswers[i], '<br>')
    }
}

function showFalseAnswers(_falseAnswers) {
    for (let i = 0; i < _falseAnswers.length; i++) {
        document.write(_falseAnswers[i], '<br>')
    }
}

function showBarrierTitles(_notificationMessages){
    document.write(notificationMessages.titles.barrier);
}

function showTrueAnswersTitles(_notificationMessages){
    document.write(notificationMessages.titles.trueAnswers);
}

function showFalseAnswersTitles(_notificationMessages){
    document.write(notificationMessages.titles.falseAnswers);
}

// ==================== data

const words = [
    {
        origin: 'Wassup',
        translate: 'здарова',
    },
    {
        origin: 'Bye',
        translate: 'пока',
    },
    {
        origin: 'How are you?',
        translate: 'как дела?',
    },
]

const settings = {
    correctAnswersMinPercent: 50,
}

const notificationMessages = {
    start: {
        hello: 'Hi man! Here you can learn English with this programm. Good luck!',
    },
    result: {
        finishSuccess: 'Молодец! Пора ехать в Англию! Твой результат: ',
        finishUnSuccess: 'Ты можешь лучше! Твой результат: ',
    },
    titles: {
        trueAnswers: '<br>' + 'ПРАВИЛЬНЫЕ ОТВЕТЫ: ' + '<br><br>',
        falseAnswers:'<br>' + 'НЕПРАВИЛЬНЫЕ ОТВЕТЫ: ' + '<br><br>' ,
        barrier: '<br><br>' + '=====================================' + '<br><br>',
    }
}

let trueAnswers = []

let falseAnswers = []


// ==================== main

showHalloMessage(notificationMessages);
startTraining(words);
showResult(words, settings, notificationMessages);
showTrueAnswersTitles(notificationMessages);
showTrueAnswers(trueAnswers);
showBarrierTitles(notificationMessages);
showFalseAnswersTitles(notificationMessages);
showFalseAnswers(falseAnswers);

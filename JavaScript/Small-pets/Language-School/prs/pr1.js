
/*
const words = {
    word0: {
        origin: 'Wassup',
        translate: 'Здарова',
    },
    word1: {
        origin: 'Bye',
        translate: 'Пока',
    },
    word2: {
        origin: 'How are you?',
        translate: 'Как дела?',
    },
}
*/
// переформатируем объект words в качестве массива 

const words = [
    {
        origin: 'Wassup',
        translate: 'Здарова',
    },
    {
        origin: 'Bye',
        translate: 'Пока',
    },
    {
        origin: 'How are you?',
        translate: 'Как дела?',
    },
]

const notificationMessages = {
    start: {
        hello: 'Hi man! Here you can learn English with this programm. Good luck!',
    },
    result: {
        finishSuccess: 'Молодец! Больще 50% правильных ответов',
        finishUnSuccess: 'Ты можешь лучше!',
    },
}

const settings = {
    correctAnswersMinPercent: 50,
    // wordsCount: 3, // после введения массива этот счетчик не нужен 
}

const result = {
    correctAnswerCount: 0,
}

/*
let userAnswer0
let userAnswer1
let userAnswer2
*/

//=====================================

alert(notificationMessages.start.hello)

/*
userAnswer0 = prompt(words[0].origin); // 0
alert(userAnswer0 === words[0].translate);
if (userAnswer0 === words[0].translate) {
    ++ result.correctAnswerCount;
}

userAnswer1 = prompt(words[1].origin); // 1
alert(userAnswer1 === words[1].translate);
if (userAnswer1 === words[1].translate) {
    ++ result.correctAnswerCount;
}

userAnswer2 = prompt(words[2].origin); // 2
alert(userAnswer2 === words[2].translate);
if (userAnswer2 === words[2].translate) {
    ++ result.correctAnswerCount;
}
*/ 

// замена повторяющихся блоков одним циклом

for (let i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].origin); 
    alert(userAnswer === words[i].translate);
    if (userAnswer === words[i].translate) {
        ++ result.correctAnswerCount;
    }
}

const userCorrectAnswerPercent = result.correctAnswerCount / words.length * 100;

if (userCorrectAnswerPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess)
} else {
    alert(notificationMessages.result.finishUnSuccess)
}

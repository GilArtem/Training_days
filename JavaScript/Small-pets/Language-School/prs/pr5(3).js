
/*
let grades = [1, 4, 5, 6, 5, 4, 3, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 5]

for (let index = 0; index < grades.length; index++) {
    document.write(grades[index], '<br>')
}
*/

let peoples = [
    {
        name: 'Artem',
        surname: 'Gil',
        birthYear: 1997
    },
    {
        name: 'Liza',
        surname: 'Sergeeva',
        birthYear: 1999
    },
    {
        name: 'Artem',
        surname: 'Sergeev',
        birthYear: 1998
    }
]

let shopper = [
    ['яйца','молоко', 'хлеб', 'рыба'],
    ['яйца','мясо', 'хлеб',],
    ['вода','молоко', 'печенье',],
    ['кефир','молоко', 'масло',],
]

for (let i = 0; i < peoples.length; i++) {
    document.write(peoples[i].surname, '<br>')
}

document.write('********************************', '<br>')

for (let i = 0; i < shopper.length; i++) {
    document.write('СПИСОК: ', i + 1,  '<br>')
    document.write('==============', '<br>')
    for (let j = 0; j<shopper[i].length; j++) {
        document.write(j + 1, ' - ', shopper[i][j], '<br>')
    }
    document.write('<br>')
}
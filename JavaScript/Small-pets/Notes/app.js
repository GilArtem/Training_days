/* Theory

const array = [1, 2, 3, 40, 42]
//const arrayString = ['a', 'b', 'c', null, 13]
//const array = new Array(1, 2, 3) // еще один способ создания массивов

//console.log(array.length) //получаем длину массива
//console.log(array[1]) // получаем значение массива по индексу
//console.log(array[array.length - 1]) // получаем последний элемент массива
//array[0] = 'Privet' // меняем первый элемент массива 
//array[array.length] = 'Poka' // добавляем последний элемент массива (непопулярный способ(ТАК НЕ ДЕЛАЕТСЯ))
console.log(array)

*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//console.log(inputElement.value)

//const notes = ['записать блок про массивы', 'рассказать теорию объектов']

//function render() {
/* 
    for (let i = 0; i < notes.length; i++ ) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    }

// с помощью цикла выводятся все элементы массива

    //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
*/
/*
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}
*/
//render()


/*
createBtn.onclick = function () {
    if (inputElement.value.lenght === 0) {  // эта конструкция не должна давать сохронять пустое значение 
        return
    }
   //listElement.innerHTML = 
    
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
    inputElement.value = ''
}
*/


/*
function getNoteTemplate(title) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${title}</span>
                        <span>
                            <span class="btn btn-small btn-success">&check;</span>
                            <span class="btn btn-small btn-danger">&times;</span>
                        </span>
                    </li>
    `
}

*/




/* Object theory 

const person = {
    firstName: 'Artem',
    lastName: 'Gil',
    year: 1997,
    hasGirlfriend: true,
    languages: ['ru', 'en'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}
console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = false
console.log(person[key])
person.getFullName()

*/



/* Начало нового приложения */

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false,
    }, 
    {
        title: 'рассказать теорию объектов',
        completed: true,
    },
]

function render() {
    /* 
        for (let i = 0; i < notes.length; i++ ) {
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
        }
    
        //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
        //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
    */
    
    //for (let note of notes) {
    //    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    //}

    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
       listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {  // эта конструкция не должна давать сохронять пустое значение 
        return
    }
   //listElement.innerHTML = 
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)  // с помощью пуша добавляем сущесвующий объект в конец списка
    render()

    //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    inputElement.value = ''
}

listElement.onclick = function(event) {
    //console.log(event.target.dataset.index)
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle'){
            //console.log('toggle', index)
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            //console.log('remove', index)
            notes.splice(index, 1)   // splice - это удаление 
        }

        render()
    }

}

function getNoteTemplate(note, index) {
    console.log(note.completed)
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                    <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type= "toggle">&check;</span>
                    <span class="btn btn-small btn-danger" data-index="${index} data-type= "remove">&times;</span>
                </span>
        </li>
    `
}

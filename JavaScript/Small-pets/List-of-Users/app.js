// работа с асинхронностью и фильтация пользователей в реальном времени

/*
const car = {
    model: 'Tesla',
    year: 2023,
}

const json = JSON.stringify(car)
const parced = JSON.parse(json)

console.log(json)
console.log(parced)
*/



//const list = document.getElementById('list') // есть более универсальный аналог 

const list = document.querySelector('#list') // более универсальный аналог 
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    //console.log('input', event.target.value)
    //const value = event.target.value
    //const {value} = event.target // сокращаем код
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(value)
)
    render(filteredUsers)
})

async function start() {
    list.innerHTML = 'Loading ...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', //{
           // method: 'GET',  // это не обязательно прописывать (показано для демонстрации)
        //}
        )
        //console.log(resp)
        const data = await resp.json()  // выводим пользователей 
        //console.log(data)
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users=[]) {
    if (users.length === 0) {
        list.innerHTML = 'No matched users!'
    } else {
        const html = users.map(toHTML).join('')
        list.innerHTML =  html
    }
  
}

function toHTML(user) {
    return `
    <li class="list-group-item"${user.name}</li>`
}

start()
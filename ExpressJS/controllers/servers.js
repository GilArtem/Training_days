// контроллеры представляют из себя обычные функции 

// работаем с массивом списков серверов (в реальности тут работа с бд). Это мок
let servers = [
{id: '1', name: 'AWS', status: 'working'},
{id: '2', name: 'Google Cloud', status: 'working'},
{id: '3', name: 'Yandex Cloud', status: 'working'},
{id: '4', name: 'Microsoft', status: 'pending'},
];


export const getAll = (req, res) => {
    res.json(servers) // также мы можем прописывать статус res.status(200).json(servers)
};

export const create = (req, res) => {
    console.log(req.body)  // Вывод: undefind (После манипуляций с мидлварями пример вывода будет таков: { name: 'newnew', status: 'created' })
    const newServer = {
        id: Date.now().toString(),
        ...req.body  // разварачиваем все то, что пришло с фронта 
    }
    servers.push(newServer)  // кладем новый сервер в нашу импровизированную бд
    res.status(201).json({newServer})
};

export const remove = (req, res) => {
    console.log('ID', req.params.id)  // "id" - совпадает с наименованием, указанным в роутере ("id:")
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({message: 'Server has benn removed.'})
};
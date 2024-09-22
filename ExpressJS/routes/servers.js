// Сюда выносим логику запросов из index.js
import { Router } from 'express';
import { getAll, create, remove } from '../controllers/servers.js'

const router = Router();

// router.get('/api/server', (req, res) => {
//     res.json({test: 13})
// });

// После импорта getAll
router.get('/api/server', getAll);  // получаем все значения 

router.post('/api/server', create);  // добавляем значения 

router.delete('/api/server/:id', remove);  // удаляем значения 

router.put(''); // для полного обновления существующего элемента 

router.patch('');  // для частичного обновления значений 

export default router; 


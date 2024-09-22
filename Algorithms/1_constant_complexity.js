//// Константная сложность O(1)
// При константной сложности вне зависимости от размера входных данных (n), время выполнения алгоритма остается постоянным и не зависит от объема данных.
// Это самый быстрый и эффективный вид временной сложности.

// Примеры:
// 1. Доступ к элементу в массиве по индексу. 
// 2. Вставка или удаление элемента в конец списка (очереди) фиксированной длины.

const forO1 = [1, 2, 3, 4, 5];

function getLastEl (arr) {
    console.time('getLastEl');
    console.log(arr[ arr.length - 1 ]);
    console.timeEnd('getLastEl');
};

getLastEl(forO1); // 5
                  // getLastEl: 12.563ms
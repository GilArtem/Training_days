// $(document).ready(() => {
//     $('#content').html('<h1>Привет TypeSctp</h1>');
// })

// В данном случае мы задействуем событие document.ready, 
// которое определено в jquery и которое срабатывает при 
// загрузке документа. И далее с помощью лямбда-выражения, 
// которое определяет функцию обратного вызова, с помощью 
// знакомого многим синтаксиса jquery на веб-страницу добавляется 
// новый элемент.

// Также мы могли бы использовать сокращенное определение функции:
$(() => {
    $("#content").html("<h1>Привет TypeScript</h1>");
});

// Обработаем нажатие на кнопку
$(() => {
    $("#alertBtn").click((e) => { $("#content").html("<h2>Привет мир</h2>"); });
});
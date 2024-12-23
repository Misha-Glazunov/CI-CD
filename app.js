const express = require('express');
const app = express();
const port = 3000; // Вы можете использовать любой другой порт

// Определяем рекурсивную функцию
function recursiveFunction(number) {
    console.log(number);
    if (number > 2) {
        recursiveFunction(Math.floor(number / 2));
        recursiveFunction(Math.floor(number / 3));
    }
}

// Обработка корневого маршрута
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Дополнительный маршрут для запуска вашей рекурсивной функции
app.get('/start/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    recursiveFunction(number);
    res.send(Recursive function started with ${number});
});

// Запуск сервера
app.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});

module.exports = app; // Это нужно для тестов

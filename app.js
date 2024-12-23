// app.js
const express = require('express');
const app = express();

// Рекурсивная функция
const recursiveFunction = (number) => {
    let result = number + '\n'; // Начнем с текущего номера
    if (number > 2) {
        result += recursiveFunction(Math.floor(number / 2)); // Рекурсия с number / 2
        result += recursiveFunction(Math.floor(number / 3)); // Рекурсия с number / 3
    }
    return result; // Возвращаем результат
};

// Главная точка маршрута
app.get('/', (req, res) => {
    const output = recursiveFunction(9); // Вызываем рекурсивную функцию с 9
    res.status(200).send(output); // Отправляем результат клиенту
});

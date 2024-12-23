const express = require('express');
const app = express();

// Определяем рекурсивную функцию
function recursiveFunction(number) {
    console.log(number);
    if (number > 2) {
        recursiveFunction(Math.floor(number / 2));
        recursiveFunction(Math.floor(number / 3));
    }
}

// Определяем роут для запуска рекурсивной функции
app.get('/run-recursion/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).send('Invalid number');
    }
    
    const output = [];
    
    const originalConsoleLog = console.log; // Храним оригинальный console.log
    
    console.log = (value) => { // Переопределяем console.log для сбора выводимых значений
        output.push(value);
    };
    
    recursiveFunction(number); // Вызываем рекурсивную функцию

    console.log = originalConsoleLog; // Восстанавливаем оригинальный console.log
    
    res.send(output.join('\n')); // Возвращаем собранные выводы как ответ
});

// Экспортируем приложение
module.exports = app;

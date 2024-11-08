"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiply100 = void 0;
// В этом модуле создана переменная. Она будет инициализироваться каждый раз когда к модулю будут обращаться из вне
const param1 = 100;
// Так же все функции, которые вызываются (не определены а именно ВЫЗЫВАЮТСЯ) в этом модуле будут вызваны в момент обращения к модулю
console.log(`Тут мы выводим параметр param1 - ${param1}`);
// Экспортируем функцию умножения на 100
const Multiply100 = (param2) => {
    console.log(`Выведем что - то на консоль при вызове этой функции ${param2}`);
    return param1 * param2;
};
exports.Multiply100 = Multiply100;

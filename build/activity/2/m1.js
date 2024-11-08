"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainConst = exports.anotherConst = exports.someConst = void 0;
//Экспорт переменных
exports.someConst = 0;
exports.anotherConst = true;
exports.mainConst = "main";
// Экспорт объекта. Можно его пометить как default значит по умолчанию будет экспортировать его
exports.default = {
    someConst: exports.someConst,
    anotherConst: exports.anotherConst,
    mainConst: exports.mainConst,
};

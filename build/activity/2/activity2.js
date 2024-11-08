"use strict";
/*
    Модули в node.js-typescript
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
// ИМПОРТИРУЕМ из первого модуля переменные
// Тут импортируем то что экспортированно по умолчанию. Мы можем указать любое имя для него, например def
const m1_1 = __importDefault(require("./m1"));
m1_1.default.anotherConst;
m1_1.default.mainConst;
m1_1.default.someConst;
// То же самое с функциями
const m2_1 = __importStar(require("./m2"));
(0, m2_1.default)(1, 2);
(0, m2_1.sum)(3, 4);
const m2_2 = require("./m2");
(0, m2_2.sum)(5, 6);
// обращаемся модулю 3
const m3_1 = require("./m3");
// Тут тоже что то экспортируем. Мы ожидаем что при вызове этой функции все отработает в модуле 3
exports.bar = m3_1.Multiply100;

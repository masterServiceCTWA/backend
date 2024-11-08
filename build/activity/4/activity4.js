"use strict";
/*
    ПРАКТИКА - пишем консольное приложение
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
exports.enterData = enterData;
const readline_1 = __importDefault(require("readline"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function enterData() {
    rl.question('Введите данные: ', (data) => {
        const parametr1 = data.split(" ")[0];
        const operation = data.split(" ")[1];
        const parametr2 = data.split(" ")[2];
        console.log(`param1 - ${parametr1}`);
        console.log(`operator - ${operation}`);
        console.log(`param2 - ${parametr2}`);
        //
        // BODY
        // 
        enterData();
    });
}

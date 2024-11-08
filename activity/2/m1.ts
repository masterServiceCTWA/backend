//Экспорт переменных
export const someConst: number = 0;
export const anotherConst: boolean = true;
export const mainConst: string = "main";
// Экспорт объекта. Можно его пометить как default значит по умолчанию будет экспортировать его
export default {
    someConst,
    anotherConst,
    mainConst,
}
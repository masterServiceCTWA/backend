
/*
            ПЕРЕМЕННЫЕ
    Каждая переменная имеет имя. 
    
    Имя представляет собой произвольный набор алфавитно-цифровых символов, знака подчеркивания (_) или знака доллара ($), 
    причем названия не должны начинаться с цифровых символов. 
    
    То есть мы можем использовать в названии буквы, цифры, подчеркивание и символ $. Однако все остальные символы запрещены.

    Так же нельзя называть переменные такими именами -
    await, break, case, catch, class, const, continue, debugger, default, 
    delete, do, else, enum, export, extends, false, finally, for, function, 
    if, import, in, instanceof, new, null, return, super, switch, this, throw, 
    true, try, typeof, var, void, while, with, yield
*/

/* Определяем переменные с помощью слова 
    var
        или
    let    
*/
var variable1;
let variable2;

    // Можно переменной задать значение сразу -
let variable3 = 3;
let variable4 = "4";
let variable5 = true;

    // Через запятую можно определить сразу несколько переменных и даже проинициализировать некоторые
let username = "ГАБЕН", age = 62, weight = 130;
let a, b, c=true ;

    // Переменные можно перезаписывать
username = "BILL";
age = 0;
weight = 999;

/*
    Но 
    userName = 3 
    не получиться, так как при присвоении ей назначен тип string и изменить его уже нельзя

    Но если при инициализации переменной не присваивать ей значение, тогда у нее будет тип   --- any --- (ЛЮБОЙ) и тогда ей можно 
    менять значение на любой тип
*/

variable1 = "MIKE"
variable1 = 1;
variable1 = {name : "Mike", age : 400 }

/*
    Обусловимся не использовать var, будем использовать только let
    Когда будем говорить про ОБЛАСТЬ ВИДИМОСТИ станет понятно почему
*/

/// Мы можем одной переменной присвоить значение другой.
variable3 = weight; /// последнее значение weight было 999. теперь и variable3 у нас значение 999
variable3 = 1 + variable3; // Присвоили  значение 1 плюс прошлое значение переменной. Теперь значение variable3 равно 1000

/*
            ТИПЫ ДАННЫХ
    Мы можем сразу указать какой тип будет использовать переменная
*/

// ЧИСЛО.   Целое, либо дробное, либо форматированное
let variableNumber : number;
// СТРОКА. 
let variableString : string;
// БУЛЕВОЕ  Может быть либо true либо false
let variableBoolean : boolean;
// Массив.  Это группа каких либо значение.      -- для справки - строка это тоже массив. массив символов
// Чтобы объявить массив любых типов нужно либо указать тип Array<any> либо тип  - any[]
let variableArray : Array<any>;
let variableArray2 : any[];
// Два способа выше идентичны
// Чтобы объявить массив определенного типа нужно либо указать тип Array<ТИП КОТОРЫЙ МЫ ХОТИМ> либо  - ТИП КОТОРЫЙ ХОТИМ вместе С []
let variableStrictArray : Array<number>;
let variableStrictArray2 : number[];
// Два способа выше идентичны. Объявили массивы чисел
// КОРТЕЖ.   это  фиксированный набор значений различных типов,  где порядок элементов имеет значение. 
let variableTurple : [string, number, boolean ];
// ОБЪЕКТ. это  структура данных, которая хранит пары "ключ-значение". 
// Ключи в объектах всегда являются строками, а значения могут быть любого типа данных, 
// включая числа, строки, булевы значения, массивы, другие объекты и даже функции.
let variableObject : {field1:string,field2:number};
// NULL. Особый тип данных, который представляет отсутствие значения. 
let variableNull : null;
// UNDIFINED. Особый тип данных, который представляет отсутствие присвоенного значения. 
let variableUndefined : undefined;
// ANY. Этим мы отключаем какую либо проверку типов. 
let variableAny : any;
// Функция.   Переменной можно назначать функцию определенной сигнатуры
let variableFunction : (param1: number) => number;


//                    BIGINT и SYMBOL рассмотрим позже

/*
    Можно задавать несколько типов для переменной. Тогда она должна принимать один из выбранных типов
    Задается с помощью знака |   (Озаначает ИЛИ)
*/

let doubleTypeVariable : number | string;
doubleTypeVariable = 0;
doubleTypeVariable = "zero"
//  так же переменной можно присвоить null и undefined
doubleTypeVariable = undefined;
doubleTypeVariable = null;
//  Это говорит о том что нужно иногда проверять являются не ли значения null или undefined. 
//  Если не проверять могут быть не приятные сюрпризы

// По сути одно и тоже.   НО В ОБЪЕКТАХ ЛОГИКА ДРУГАЯ
let p1 : number;
let p2 : number | undefined;
let p3 : number | undefined | null;
p1 = undefined;
p1 = null;
p1 = 3

/// Зададим значения переменным

variableNumber = 0;
// Используют   "" - двойные ковычки, '' - одинарные ковычки, `` - косые ковычки
variableString = "";
variableBoolean = true;

// Так как у нас массив любых типов, то присваеваем в него абсолютно любые значения.
// Присваиваются значения в квадратных скобках
variableArray = ["any",12,444];
// Теперь мы меняем значения массива на новые. теперь это новый массив
variableArray = [true,"12","444"];
// А вот если мы указали тип массива то можем присваивать ему только тот тип, который указали
variableStrictArray = [1,2,3,4];

// В кортеже мы присваиваем строго в том порядке, который указали в объявлении
variableTurple = ["b", 321, false ];
// А вот мы передаем в кортеж занчения прошлых переменных
variableTurple = [variableString, variableNumber, variableBoolean ];
// В объекте мы должны присвоить значения всем полям, в любом порядке если они не помечены как не обязательные
variableObject = { 
    field2 : 2,
    field1 : "s",
};
// ТУТ вариантов нет
variableNull = null;
// ТУТ вариантов нет
variableUndefined = undefined;
// В переменную с типом any присваиваем что угодно. Хоть кортеж
variableAny = variableTurple;

// А тут мы присвоили функцию. Теперь эта переменная хранит в себе функцию воторая возводит в квадрат
variableFunction = (param2222: number) => {
    return param2222*param2222;
};

/*
    Константы 
*/

// Разница между переменными и константами в том, что константу невозможно переписать 
// и к константе нужно присваивать значение при объявлении 
const const1 = 1;

// ТАК НЕ ПОЛУЧИТЬСЯ
// const1 = 2
// const1 = null;
// const1 = undefined


// МОЖНО ТАК
const const2 : number|string = 1; 
const const3 : number|string = "1";

//  МОЖНО ПРОВЕРИТЬ ТИП ПЕРЕМЕННОЙ С ПОМОЩЬЮ ОПЕРАТОРА 
// typeof
console.log(typeof const2); // - Выведет number
//// НО МЫ БУДЕМ УЧИТЬСЯ ПИСАТЬ 
//// МАКСИМАЛЬНО ПРАВИЛЬНО, РАСШИРЯЕМО, ТИПИЗИРОВАННО И АРХИТЕКТУРНО ПРАВИЛЬНО, 
//// ЧТО ЭТО НАМ СКОРЕЕ ВСЕГО НЕ ПОНАДОБИТЬСЯ)

/*
    Преобразование данных
*/

// В typescript при необходимости можно преобразовывать данные одного типа в другие.
// Следует это делать с осторожностью!
// Вот некоторые примеры преобразования типов

const v1 = 5;
const v2 = String(v1);
// Здесь мы вызвали функцию String() и передали параметром переменную с типом number
// Значение преобразовалось в строку и переменная v2 имеет значение "5";

const v3 = true;
const v4 = String(v3);
// То же самое с типом boolean. Значение переменной v4 теперь "true";

const v5 = String(variableStrictArray);
const v6 = String(variableObject);
const v7 = String(variableFunction);
const v8 = String(variableTurple);
// Любое значение можно преобразовать в стринг. Если конечно это нужно...
export const i = () => {
    console.log(v5);
    console.log(v6);
    console.log(v7);
    console.log(v8);
} 
// Чаще бывает что строку преобразовывают число.
// Но если строка по факту не число, тогда значение станет NaN - not a number;
// Это может привести к ошибкам в програме, и она перестанет работать
// Поэтому нужно делать какие то проверки или обработку ошибок

const v11 = "5";
const v12 = "five";

const v13 = Number(v11); // v13 = 5
// Тут все хорошо
const v14 = Number(v12); // NaN
// Тут будет Nan
export const i1 = () => {
    console.log(v14);
}
// Еще встречается преобразование число в boolean и наоборот
const v21 = true;
const v22 = Number(v21); //1   false-0
const v23 = 0;
const v24 = -100;
const v25 = Boolean(v23);
const v26 = Boolean(v24);
// 0 и NaN преобразуеся в false, все остальное в true
export const i2 = () => {
    console.log(v22);
    console.log(v25);
    console.log(v26);
}

/*
    МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ
*/

const firstNumber: number = 27;
const secondNumber: number = 5;

// Арифметические операции
const sum: number = firstNumber + secondNumber; // Сложение
const difference: number = firstNumber - secondNumber; // Вычитание
const product: number = firstNumber * secondNumber; // Умножение
const quotient: number = firstNumber / secondNumber; // Деление
const remainder: number = firstNumber % secondNumber; // Операция ищет остаток от деления   => 2
const compOperation : number = firstNumber + secondNumber * secondNumber; // Приоритет операций как в обычной матиматике. 
const compOperation2 : number = (firstNumber + secondNumber) * secondNumber; // В скобках выполняется первым
const toStringOperation = String(firstNumber) + secondNumber; // При сложении со строкой все остальные части преобразуются в строку
// toStringOperation имеет тип string

/*
    Для стандартных математических операций можно использовать 
    глобальный объект Math

    Вот его функции
*/
//    1.  Арифметические функции:
let x:number;

Math.abs(x); //: Возвращает абсолютное значение x.
Math.ceil(x); //:  Округляет x до ближайшего целого вверх.
Math.floor(x); //:  Округляет x до ближайшего целого вниз.
Math.max(1,2,3); //:  Возвращает максимальное значение из списка аргументов. 
Math.min(3,2,1); //:  Возвращает минимальное значение из списка аргументов.
Math.pow(a, b); //:  Возводит a в степень b.
Math.round(x) //:  Округляет x до ближайшего целого числа.
Math.sqrt(x) //:  Возвращает квадратный корень из x.
Math.trunc(x) //:  Удаляет дробную часть x, возвращая только целую часть.

//2.  Тригонометрические функции:
let y:number;
Math.sin(x) //:  Возвращает синус x (в радианах).
Math.cos(x) //:  Возвращает косинус x (в радианах).
Math.tan(x) //:  Возвращает тангенс x (в радианах).
Math.asin(x) //:  Возвращает арксинус x (в радианах).
Math.acos(x) //:  Возвращает арккосинус x (в радианах).
Math.atan(x) //:  Возвращает арктангенс x (в радианах).
Math.atan2(y, x) //:  Возвращает арктангенс отношения y/x (в радианах).

//3.  Экспоненциальные и логарифмические функции:

Math.exp(x) //:  Возвращает e в степени x.
Math.log(x) //:  Возвращает натуральный логарифм x.
Math.log10(x) //:  Возвращает десятичный логарифм x.

//4.  Случайные числа:

Math.random() //:  Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (исключительно).

//5.  Константы:

Math.E //:  Основание натурального логарифма (приблизительно 2.718).
Math.LN10 //:  Натуральный логарифм 10 (приблизительно 2.302).
Math.LN2 //:  Натуральный логарифм 2 (приблизительно 0.693).
Math.LOG10E //:  Десятичный логарифм e (приблизительно 0.434).
Math.LOG2E //:  Двоичный логарифм e (приблизительно 1.442).
Math.PI //:  Число Пи (приблизительно 3.14159).
Math.SQRT1_2 //:  Квадратный корень из 1/2 (приблизительно 0.707).
Math.SQRT2 //:  Квадратный корень из 2 (приблизительно 1.414).

/*
    Логические операции
    Сравнение. Производиться с помощью знаков больше меньшн или ровно
    Операторы - 
        <  меньше
        >  больще
        !  Логическое НЕ  - Инвертирует логическое значение операнда
        === равно
        <=  меньше или равно
        >=  больше или равно
        !== не равно
        !<  не меньше
        !>  не больше
        !<= не меньше или не равно
        !>= не больше или не равно
        &&  Логическое И 
            Возвращает true, если оба операнда истинны, иначе false.
        ||  Логическое ИЛИ
            Возвращает true, если хотя бы один операнд истинен, иначе false.
    Результат операций булевое значение
*/


const l41 : boolean = 1 < 3 // Один меньше трех   true
const l42 : boolean = 1 <= 3 // Один меньше или равно трем  true
const l43 : boolean = 3 >= 3 // Три больше или равно трем  true
const l44 : boolean = 3 === 3 // Три равно три  true
const l45 : boolean = 3 !== 3 // Три не равно три. false
const l46 : boolean = 1 > 3 // Один больше трех false
const l47 : boolean = 1 !> 3 // Один не больше трех true
const l48 : boolean = 1 < 3 && 1 < 4 // Один меньше трех и один меньше четырех. Обе операции будут true. Значит операция И вернет true
const l49 : boolean = 1 < 3 && 4 < 1 // Один меньше трех и четыре меньше одного. Одна операция будет true другая false. Значит операция И вернет false
const l411 : boolean = 1 < 3 || 1 < 4 // Один меньше трех или один меньше четырех. Обе операции будут true. Значит операция И вернет true
const l412 : boolean = 1 < 3 || 4 < 1 // Один меньше трех или четыре меньше одного. Одна операция будет true. Значит операция И вернет true
const l413 : boolean = 3 < 1 || 4 < 1 // Один меньше трех или четыре меньше одного. Обе операции будут false. Значит операция И вернет false



/*
    Объекты
*/

/*
    Встроенные в node.js объекты
*/

/*
    JSON
*/

/*
    .env
*/



/*
    ООП
    Наследование, инкапсуляция, полиморфизм
*/


/*
    Практика. Напишем консольную игру.
*/


/*
    Promise. async/await
*/

/*
    Настройка typescript
*/



/*
    Декораторы
*/

/* 
    События
*/





/*
    REST http. обзор
*/
/*
    express.js или nest.js. обзор
*/
/*
    git. github. github desctop. Учимся работать в команде 
*/


/*
    SQL postgress. обзор
*/

/*
    ORM.
    typeorm/sequelize. обзор
*/




/*
    луковая архитектура. краткий обзор
*/

/*
    авторизация/аутентификация. краткий обзор
*/

/*
    JWT/Session/twa. красткий обзор
*/

/*
    Пишем телеграм бота. Практика
*/

/*
    Пишем приложение. Большая практика
*/
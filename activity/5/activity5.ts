export const startActivity5 = () => {
}



/*
    Ссылочные типы и типы значения

    Типы значения :
    - number
    - string
    - boolean
    - symbol
    - null
    - undefined
    
    Ссылочные типы :

    - object
    - array
    - function
    
    Тип значения хранит в себе копию какого то значения
    Тип ссылочный хранит в себе ссылку на какой то объект

*/

let number1 = 1;
// В переменную number2 мы записали ЗНАЧЕНИЕ переменной number1
let number2 = number1;

// ЗНАЧЕНИЕ переменной number1 изменилось на 101
number1 = number1 + 100;

const log1 = () => {
    console.log(`ЗНАЧЕНИЕ ПЕРЕМЕННОЙ number2 ${number2}`);
}
// ЗНАЧЕНИЕ переимиенной number2 осталось 1

number2 = 1000000;
// Мы поменяли значение переменной number2. Значение number1 осталось 101
const log2 = () => {
    console.log(`ЗНАЧЕНИЕ ПЕРЕМЕННОЙ number1 ${number1}`);
}

let string1 = "hi";
let string2 = string1;
string1 = string1 + " BODY";
const log3 = () => {
    console.log(`1 - ${string1}, 2 - ${string2}`);
}


// Пример ссылочных типов - 

let obj1 = {day : 1, time : "22:00"};
// переменная obj1 хранит не значчение а ссылку на объект
const obj2 = obj1;
// теперь и obj2 хранит ССЫЛКУ НА ЭТОТ ЖЕ ОБЪЕКТ !

obj1.day = 2;
obj1.time = "14:00"

obj1 = {day : 3, time : "00:00"}
// Мы сейчас изменили ОБЪЕКТ. 
// Но obj2 хранит в себе ссылку на этот же объек.

const log4 = () => {
    console.log(obj2.day);
    console.log(obj2.time);
}

// Тоже и с массивами -
const massive1 : number[] = [1,2,3]
const massive2 = massive1;

massive1.push(4);

const log5 = () => {
    console.log(`MASSIVE 2 - ${massive2}`)
}



let f1 = (par : string) : string => {
    return par + par;
}
const f2 = f1;

f1 = (par : string) : string => {
    return par + par + par;
}





/*
    Функции
*/

// Сигнатура функции -
// Вариант 1 

// Ключевое слово function       
function       
    // Имя функции             
    functionName     
        // передаваемые параметры функции можно сколько угодно параметров от 0 до огромного количества
        (                                  ) 
            // Тип который вернет функция    void значит что ничего не вернет
         : void      
         {
    ///// ТЕЛО ФУНКЦИИИ
}


// Пример - объявим функцию, которая будет вызывать наши логи
function callLogs () : void {
    // В теле функции выполняется какой то код
    log1();
    log2();
    log3();
    log4();
    log5();
    // Сейчас мы просто обратились к другим функциям и вызвали их
}


// Вызов функции -
// Пишем имя функции или переменной в которой она хранится и ОБЯЗАТЕЛЬНО круглыые скобки (). 
//Если функция требует параметров - передаем их в скобках ровно в том же порядке как они указаны в объявлении функции

// например -
function callLogsByNumber(logNumber : number, par : string, fff? : boolean) : void {
    switch(logNumber) {
        case 1 : {
            log1();
            break;
        }
        case 2 : {
            log2();
            break;
        }
        case 3 : {
            log3();
            break;
        }
        default : {
            log4();
            break;
        }
    }
}

// ВАРИАНТ НОМЕР 2 - Стрелочная функция

// параметры
    () 
    // тип возвращаемого значения   стрелочка, указывающая на тело
        : void                         => 
                    
    {
        // ТЕЛО
} 

// например - присвоим стрелочную функцию в переменную. результат выполнения функции будет строка
const callMyName = (name : string) : string => {
    console.log(name);
    return "U'R goddamn right.";
}
// можно присвоить функцию как значение какой то переменной. Обязательно без круглых скобок, так как иначе это уже будет вызов

let callMyName2 = callMyName;
// Вот мы присваеваем в какую то переменную значение РЕЗУЛЬТАТА функции
let frase : string = callMyName('HAIZENBERG!');

const log6 = () => {
    console.log(`результат выполнения функции - ${frase}`);
}

/*
    Область видимости переменных
    Глобальная область видимости - когда переменные объявляются вне фигурных скобок - они же - БЛОКИ

    Локальная область - когда переменные объявляются в блоках
    В каждом блоке своя область видимости
*/
// let var
const log7 = () => {

    const var1 = "Область видимости для функции log7";
    // Переменная объявлена в блоке функции log7. Вне этой функции мы к ней обратиться не сможем
    if (true) {
        // МОЖНО создать переменную даже если в блоке выше есть одноименная переменная
        const var1 = "Область для текущего блока if"
        console.log(var1);
        const var2 = "eee"
        if (true) {
            const var1 = "А это другой блок";
            console.log(var1);
            console.log(var2);
        }
        console.log(var1); // "Область для текущего блока if"
    }
    // Те переменные, которые были в блоке ниже - невидимы для блока выше
    console.log(var1);
    // Переменную var2 нельзя вызвать из блока ниже

    // Та переменная, которая в одном фаиле, но вне блоков уже считается глобальной
    // Ей можно пользоваться в блоке
    console.log(frase);
}



const log8 = () => {

    let var1 : string;
    // Если нам нужно переменную ВЫТАЩИТЬ ИЗ БЛОКА НИЖЕ 
    // то мы объявляем как let а не как константу
    if (true) {
        var1 = "А тут можно уже ей присвоить значение"
        console.log(var1);
        if (true) {
            const var1 = "А это другой блок";
            console.log(var1);
        }
    }
    // Теперь переменная у нас как будто вытащена из блока ниже
    console.log(var1);
}



// Функцию можно вызывать в нутри этой же функции. Это называется рекурсией. 
// Есть важный момент - у рекурсии должно быть условие выхода

// Например, всем известная функция нахождения числа фибаначи
function fibonacci(n: number): number {
    // Обязательное условие выхода
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// Нахождение факториала
function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
3}




// Функция как аргумент
// Можно передавать как аргумент функцию и вызывать ее внутри функции

function callBackExample(callback : (param : string)=>string, param1 : string ) : string {
    // Какой то код    
    let answer = callback(param1);
    // Какой то код
    // Возврат ответа
    return answer;
}


/*
    Ошибки. Обработка ошибок
    в приложениях БУДУТ ошибки
    всегда. 
    могут, например, пользователи делать то чего им делать нельзя.
    могут, например, не работать внешние сервисы, например АПИ сервиса 
    или АПИ чужое может сломаться или база данных отвалиться
    ВСЕ потенциальные ошибки должны быть обработаны

    Для отлова потенциальной ошибки используют конструкцию
    try 
    {
        ТЕЛО
        Если здесь происходит какая то ошибка
        то действие переходит в блок CATCH
    } 
    catch(e : any)
    {
        console.log(e);
    }

    либо 

    try{
    } catch(e){
    } finally{
    }


    так же мы сами можем "бросать" ошибку если нам нужно прекратить выполнение операции
*/

// Например ошибка деления на ноль. Самая стандартная ошибка в программировании
function divide(a: number, b: number): number {
    try {
        // Тело которое мы хотим выполнить
        if (b === 0 || Number.isNaN(b)) {
            throw new Error ("b is not number or zero");
        }
        return a / b;
    } catch (error) {
        // Здесь мы выводим на консоль ошибку которая у нас произошла
        console.error("Ошибка деления:", error.toString());
        return 0; // Возвращаем 0, если произошла ошибка
    }
  }
  
  console.log(divide(10, 2)); // Вывод на консоль: 
  //5
  console.log(divide(10, 0)); // Вывод на консоль: 
  // Ошибка деления: [Error: Division by zero]  
  // 0

// Пример с чтением данных из файла
// Нам нужно из файла что-то прочитать и вернуть его содержимое
// Логика такая - открываем файл, читаем содержимое, записываем содержимое в переменную, закрываем файл, возвращаем содержимое
function readFile (filename: string) : string {
    let fileContent: string;
    try {
        // Функция открытия файла. Открываем файл
        fileContent = /* Логика чтения файла. например чтото прочитали и записали это в переменную */ `data from file ${filename}`; 
    } catch (error) {
        // Если что-то пошло не так - выведим пока просто это на консоль
        console.error("Ошибка чтения файла:", error);
    } finally {
      // Функция закрытия файла. Закрываем файл

      // Даже можно бросить ошибку, чтобы обработка в выше стоящей функции не продолжилась а завершилась
      // Но тогда обязательно ошибка должна быть обработана
      
      // Проверим что строка пустая
      if (!fileContent) {
        throw new Error(`Файл не прочтен`);
      }
    }
    return fileContent;
}




// Функция которая вернет совершенно случайным образом либо true либо false
const getRandomDuo = () : boolean => {
    const date = Date.now();
    if (date % 2 === 0) {
        return true;
    } return false;
}

// Класс аккаунта пользователя // симулятор пользователя типа
class User {
    name : string;
    email : string;
}

// Функция симулятор запроса к базе для поиска пользователя
// Она будет в 50% случаев возвращать пользователя, как будто нашла в базе
// И в 25% случаев симулировать ошибку подключения к базе
const getUserFunction = () => {
    if (getRandomDuo()) {
        const user : User = {email : null, name : "OBI"};
        return user;
    }
    if (getRandomDuo()) {
        throw new Error("Ошибка подключения к базе");
    }
    return null;
}

// ФУНКЦИЯ симулятор регистрации пользователя
// Как будто она должна получать какие то данные для регистрации
// Проверить не зарегистрирован ли пользователь с такими данными
// И если все хорошо, вернуть экземпляр пользователя, который получился в итоге
const registration = () : User => {
    // как будто мы получаем пользователя по каким то данным
    // Это пример, поэтому данных нет
    // Пользователя запишем в константу 
    const candidateUser = getUserFunction();
    // Теперь нужно проверить существует ли уже такой пользователь
    
    if (candidateUser /* Объект приводится к boolean. Если объект равен undefined или null, тогда будет false */) {
        // Сюда попадаем если такой пользователь уже есть
        // Это противоречит логике нашего условного приложения.
        // Тогда бросаем ошибку 
        // Ошибка выбрасывается ключевым словом throw и после throw нужно создать экземпляр ошибки
        // Создаем ошибку из класса Error с помощью слова new 
        throw new Error("Такой пользователь уже существует");
    }
    // Тут типа создали нового пользователя и вернули его  
    return {email : "email", name : "Name"};
}

// Тут как будто функция которую напрямую активирует пользователь
export const controllerFunctionRegistration = () => {
    try {
        // В этом блоке у нас выполняется код
        // Если где то бросается ошибка, которая не обработанная раннее,
        // Тогда тело try перестает выполняться и переходит в блок catch
        const user = registration();
        console.log("ЗАКОНЧИЛИ ВЫПОЛНЕНИЕ TRY", `имя : ${user.name}`);
    } catch(e)  {
        // e - это сама ошибка которую впоймали.
        console.log(JSON.stringify(e,null,2));
        console.log("ЗАКОНЧИЛИ ВЫПОЛНЕНИЕ CATCH");
    } finally {
        // ЭТОТ участок будет выполняться в любом случае
        // За исключением если в блоке catch тоже не сработает невыполненая ошибка
       console.log(`ЗАКОНЧИЛИ ВЫПОЛНЕНИЯ КОНТРОЛЛЕРА. ЭТОТ УЧАСТОК ОТРАБОТАЕТ В ЛЮБОМ СЛУЧАЕ.`) 
    }
}




/*
    Массивы

    Массив это коллекция некоторых объектов.
    Массив это ссылочный тип

    Чтобы объявить массив в TypeScript, используйте квадратные скобки [] после типа элемента:
*/

// Тут мы объявляем массив с пользователями. И сразу присваиваем ему значение с нулем элементов.
const userMassive : User[] = [];

// А туу массив еще один и сразу ему присваиваем несколько элементов
const userMassive1 : User[] = [
    {email : "111",name : "boo"},
    // через запятую элементы
    {email : "another", name : "anoterName"}
];

// посмотреть количество элементов в массиве можно с помощью поля length
let usersCount = userMassive.length; // 0 

let usersCount1 = userMassive1.length; // 2


// Можно обратиться к элементу массива по индексу.
// Индекс начинается с 0
// Например получим двух пользователей со второго массива

let firstUser = userMassive1[0];  // Первый элемент идет под индексом 0
let secondUser = userMassive1[1]; // Второй под индексом 1
let thirthUser = userMassive1[2]; // Тут выбросит ошибку     index out of bounds

// ФУНКЦИИ (МЕТОДЫ) Массивов
/*
Изменение массива:

    Прибавить в массиву еще один элемент или множество элементов
- push(element: T): number   

    Возвращает последний элемент массива, но при этом удаляет его из массива
- pop(): T | undefined
    Возвращает первый элемент из массива, но удаляет его из этого массива 
- shift(): T | undefined
    Добавляет один или несколько элементов в начала ммассива и возвращает новую длину массива
- unshift(...elements: T[]): number
    Удаление части массива.  start - индекс с которого начать удаление. deleteCount-количество элементов под удаление
    Важно - это создает новый массив (и ссылку на него)
- splice(start: number, deleteCount?: number): T[]
    Удаление части массива. + вставка в конец
- splice(start: number, deleteCount: number, ...items: T[]): T[]
    В функцию передаем callback с порядком сортировки
     * Параметры:
    * a: Первый элемент для сравнения.
    * b: Второй элемент для сравнения.

  * Возвращаемое значение:
    * -1: a должен идти перед b.
    * 0: a и b равны.
    * 1: a должен идти после b.
- sort(compareFn?: (a: T, b: T) => number): this
    Массив будет развернут задом наперед
- reverse(): this

Доступ к данным:
  Получить индекс массива. 1 - элемент который ищем 2 - С какого индекса искать
- indexOf(searchElement: T, fromIndex?: number): number
  Тоже самое только с конца
- lastIndexOf(searchElement: T, fromIndex?: number): number
    Проверить, включает ли массив элемент
- includes(searchElement: T, fromIndex?: number): boolean

Создание новых массивов:
    создать новый массив из элеменов старого от определеного индекса и до определенного индекса
- slice(start?: number, end?: number): T[]
    слаживает несколько массивов в один
- concat(...items: (T | ConcatArray<T>)[]): T[]

Дополнительные методы:
    Перебор массива.
- forEach(callbackfn: (value: T, index: number, array: T[]) => void): void
    Из старого массива создаем новый массив. Приэтом созлается и новый тип массива. 
- map(callbackfn: (value: T, index: number, array: T[]) => U): U[]
    Отфильтровать массив по определенным правилам. Возвращает новый массив
- filter(callbackfn: (value: T, index: number, array: T[]) => boolean): T[]
    Содержит ли массив определенный элемент соответствубщий правилу в коллбеке
- some(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean
    Все ли элементы массива соответствуют правилу в коллбеке
- every(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean

Свойства:
- length: number 


Самое важное свойства массива - длина массива (letnth)
Оно показывает текущую длину массива
*/

// Добавление в текущий массив 
massive1.push(10,9,8,7);   // Массив будет - [ 1 , 2 , 3 , 4 , 10 , 9 , 8 , 7 ];

// тут внимательно. Полученные элементы будут удалены из массива
const lastElement = massive1.pop(); // вернет 10, а массив станет [ 1 , 2 , 3, 4 , 10 , 9 , 8 ]
const firstElement = massive1.shift() // вернет 1, а массив станет [ 2, 3 , 4 , 10 , 9 ]

massive1.sort ((firstNumber, seckondNumber)=> {
    if (firstNumber < seckondNumber) {
        return -1;
    } else {
        return 1;
    }
});   // Массив отсортирован по возрастанию, стал - [ 2 , 3 , 4 , 9 , 10 ]

// АНАЛОГИЧНО
const sortFunction = (a : number, b : number) => {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }   
}
// Передаем в качестве параметра функции ЗНАЧЕНИЕ массива
massive1.sort(sortFunction);

massive1.reverse(); // Массив реверсирован, стал [ 10, 9 , 4 , 3 , 2 ]
const elementIndex = massive1.indexOf(10); // индекс этого елемента - 0
const elementIndex2 = massive1.indexOf(4); // индекс этого елемента - 1


// Включает ли
const isIncludeOne = massive1.includes(1); // false - массив не содержит элемента равного 1
const isIncludeTen = massive1.includes(10); // true - массив содержит элемента равной 10



let allElementsSum = 0;
// Этот метод переберет весь массив. На каждый элемент будет вызвана передаваемая в аргумент функция
massive1.forEach ( 
    // В качестве арумента передаем элемент массива
    (element) => {
        // Эта функция ничего не возвращает и недолжна
        allElementsSum = allElementsSum + element;
        if (element % 2 === 0) {
            console.log(` ${element} - четное число`);
        } else {
            console.log(` ${element} - нечетное число`);     
        }
    });

class ObjectNumber {
    constructor (value : number) {
        this.value = value;
    }
    value : number;
}    
// Так же map переберет весь массив но на выходе получится новый массив
const newObjectMassive : ObjectNumber[] = massive1.map(
    (element) => {
        return new ObjectNumber(element)
    }
);


// Отфильтруем массив. Уберем все нечетные числа
const filtredMassive = massive1.filter(
    // Если функция вернет true, тогда элемент добавится в новый массив.
    // Если false то не добавится
    (element)=> {
    if (element%2 === 0) {
        return true;
    } 
        return false;
});

// Проверка - соответствует ли хотя бы один элемент массива правилу (правило содержится в функции)
const isContainTen = massive1.some((element)=>
    {
        if (element === 10) {
            return true;
        } else {
            return false;
        }
    });

// Проверка - соответствуют ли все элементы массива правилу (правило содержится в функции)
// Если хоть один элемент несоответвует правилу (функция, которая передается в качестве аргумента), тогда вернет false

// Проверим что все элементы массива четные числа
const isEvenNumbers = massive1.every(
    (element) => {
        if (element % 2 === 0) {
            return true;
        } else 
            return false;
    }
);

/*
    Циклы
*/


// ЦИКЛ FOR                Если тут true продолжаем выполнение, false - выходим
//     стартовые параметры       Условие выхода из цикла     Изменения, которые происходят после каждого выполнения тела
for (     let i = 0          ;       i <= 10               ;     i + 1                               )    {
//    Переменные в стартовых параметрах будут видимы только в теле цикла

    /// ТЕЛО ЦИКЛА. Выполняется каждый раз
    console.log(i);
}


let i = 0;
        // Условие при котором цикл выполнится. Если true - цикл выполнится, false - прекратит выполнение
while (       i <= 10       )     {
    // ТЕЛО ЦИКЛА
    console.log(i);
    // Меняем переменную, чтобы цикл не стал вечным
    i = i + 1;
}
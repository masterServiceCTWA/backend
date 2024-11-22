
/*
    Дженерики используют параметры типов, заключенные в угловые скобки (например, <T>), 
    которые представляют неизвестный тип данных. 
    Функции и классы могут быть определены с использованием этих параметров типов, что позволяет им работать с разными типами данных, 
    передаваемыми в них.

    Повторное использование кода: Дженерики позволяют повторно использовать код для разных типов данных, экономя время и усилия.
    Безопасность типов: TypeScript проверяет типы данных в дженериках, обеспечивая отсутствие ошибок во время выполнения.
    Гибкость: Дженерики позволяют создавать более гибкие и настраиваемые компоненты кода.


    Примеры - 
*/

// функция переборки массива и вывода значения на консоль. Принимает любой тип данных. Эквивалентно -  T extends any
function foreach<T> (array : T[] ) : void {
    array.forEach (
        (value : T) => {
            console.log (value);
        }
    )
}


foreach<number> ([1,2,3]);
foreach([1,2,3]);       // При реализации дженерика его указывать не обязательно.
                        // Но 
foreach(["1",2,true]);  // Может быть такое, так как тип дженерика в этом примере any
foreach<any>(["1",2,true]);  // Может быть такое, так как тип дженерика в этом примере any
//foreach<number>(["1",2,true]);  // ТАКОЕ УЖЕ НЕ ПРОКАТИТ. Мы указали конкретный тип дженерика в вызове функции


foreach<string> (["1", "22", "33",]);
foreach(["1", "22", "33",]);

foreach([ {data : 1},  {data : "for"}, {data : true}]);
foreach<{data : any}> ([ {data : 1},  {data : "for"}, {data : true}]);


// Функция для поиска максимального значения в массиве

// Определяем дженерик в методе.
// Определили что значение дженерика может быть либо числом либо строкой
function max<T extends number | string>  (arr: T[]): T {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Использование функции max() с разными типами данных
  console.log(max([1, 2, 3])); // 3
  console.log(max(["a", "b", "c"])); // "c"

    // ТАК НЕ ПОЛУЧИТСЯ  -   Тип "boolean" не может быть назначен для типа "string | number"
    //console.log(max([true,true,false]));
    // ТАК ТОЖЕ НЕ ПОЛУЧИТСЯ  -    -  Тип "boolean" не удовлетворяет ограничению "string | number"
    //console.log(max<boolean>([true,true,false])); 


//  Дженерик в классах и интерфейсах

class Class1<T extends any> {
    value : T;
    constructor(value : T) {
        this.value = value;
    }
}

const implement1 = new Class1<number>(5);
const implement2 = new Class1(5);
implement1.value = 1


interface interface1<T extends number | string> {
    value : T;  
}

class Class2 implements interface1<number> {
    value: number;
}

class Class3 implements interface1<string> {
    value: string;
}

class Class4<T extends number> implements interface1<T> {
    value: T;
    constructor(value : T) {
        this.value = value;
    }
}
// Тут только такой вариант
const implement3 = new Class4<number>(10);
implement3.value = 4;
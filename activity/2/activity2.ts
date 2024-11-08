/*
    Модули в node.js-typescript
*/

// ИМПОРТИРУЕМ из первого модуля переменные
// Тут импортируем то что экспортированно по умолчанию. Мы можем указать любое имя для него, например def
import dggggggggef from "./m1";
dggggggggef.anotherConst;
dggggggggef.mainConst;
dggggggggef.someConst;
// Все поля у объекта который экспортирован по умолчанию


// Так же просто импортируем переменные, котрые есть в модуле 1.
// То что не экспортируется по умолчанию оборачивается в фигурные скобки, но имена обязательно указывать такие, как в модуле
import {mainConst} from "./m1";



// Если имя необходимо изменить, тога пишем as и новое имя
import { someConst as m1} from "./m1";

// Или так, чтобы все было в одной строчке
import def2jhjhjh , {mainConst as foo} from "./m1";

// То же самое с функциями
import func1, {sum} from "./m2";
func1(1,2);
sum(3,4);
import {sum as anotherNameFunction} from "./m2";
anotherNameFunction(5,6);

// обращаемся модулю 3
import {Multiply100} from "./m3";

// Тут тоже что то экспортируем. Мы ожидаем что при вызове этой функции все отработает в модуле 3
export const bar = Multiply100;
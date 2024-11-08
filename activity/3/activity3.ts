/*  
    Условные конструкции
*/

/*
    IF
    структура -

    if  ( Условие - Выражение, которое приводится к типу boolean) 
    {
        Тело. То что выполнится если условие true
    }

    Примеры -
*/

let answer : string;
const obj : {} = null;
    if
    (  !obj   
        ///   ! null
        ///   ! false
        ///     true
    ) 
    {

    }


if(!true) {
    console.log("Это не сработает потому что в условии не true ");
}
 
if (1 < 3) {
    console.log("Это сработает потому что в условии true . 1 меньше 3");   
}

if (1 > 3) {
    console.log("Это не сработает потому что в условии не true . 1 не меньше 3 ");
}

if (1 + 1) {
    console.log("Это сработает потому что 1 приведется к boolean и будет true");
}

if (0 || NaN) {
    console.log("Это не сработает потому что 0 приведется к boolean и будет false и NaN тоже привидется к false. false или false даст false");
}

const i1 = undefined;
const i2 = null

if (i1 || i2) {
    console.log("Это не сработает потому что undefined приведется к boolean и будет false и null тоже привидется к false. false или false даст false");
}

const aaa = 1 - 2;
if (aaa < 0) {
    console.log("Меньше нуля");
}


/*
    IF / ELSE

        структура -

    if  ( Условие - Выражение, которое приводится к типу boolean) 
    {
        Тело. То что выполнится если условие true
    }
    else 
    {
        Тело. То что выполниться если услвие false
    }

    Примеры -


*/

if (true) {
    console.log(`Сюда попадет`);
} else {
    console.log(`Сюда нет`);
}


let i : number;
let answer2 : string;
if ( i % 2 === 0 ) {
    answer2 = " i это четное"
} 
else {
    answer2 = " i это не четное"
}
 


let p1 = 1;
let p2 = 2;

    if (p1 < p2) 
    {
        console.log(`p1 меньше p2`);
    } 
    else if (p1 > p2) 
    {
        console.log(`p1 больше p2`);
    } 
    else
    {
        console.log(`p1 равно p2`);
    }


if (p1 < p2) {
    console.log(`p1 меньше p2`);
} 
if (p1 > p2) {
    console.log(`p1 больше p2`);
}

/*
    SWITCH / CASE

    
    switch (субъект)
    {

        case <То что сравниваем с субъектом> : {
        
            break;   <-- обязательно нужно прервать случай либо он будет выполняться дальше. break завершает работу switch() полностью выходит из него
        }

    }
*/

let day: string = "Понедельник";

switch (day) {                
  case "Понедельник":           // day === "Понедельник" , значит начнет выполняться и закончит когда вызовется команда break;
    console.log("Начало рабочей недели");          
    break;
  case "Пятница":
    console.log("Конец рабочей недели");
    break;
  case "Суббота":             // Тут нет break поэтому будет выполняться до следующего break;
  case "Воскресенье":
    console.log("Выходные!");
    break;
  default:
    console.log("Обычный день");
}



/*

    Тернарный оператор

            знак вопроса                                      двоеточие
    <УСЛОВИЕ>    ?       <То что присвоится если условие true>    :     <То что присвоится если условие false>

*/

let t1 : string | {text : string};
const firstVariant = "1 меньше 3"
const secondVariant = {text : "1 не меньше 3"};
t1 =  1 < 3 ? firstVariant : secondVariant ;
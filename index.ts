interface IPerson { 

    age : number;
    name : string;

    // Прибавить +1 год к возрасту
    growUP() : void;

    // Вывести на консоль имя персонажа
    callName() : void;

    // Вывести на консоль возраст персонажа
    callMyAge() : void;

    // Поменять имя персонажа
    changeName(newName : string) : void;

    // Поприветствовать другого персонажа (вызввать имя другого персонажа)
    greatingPerson(person : IPerson) : void;
}
class Person implements IPerson {

    name : string;
    age : number;

    constructor( ValoueName : string, ValoueAge : number)
    {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP(): void {
        this.age += 1;
    }
    callMyAge(): void {
        console.log(this.age);
    }
    callName(): void {
        console.log(this.name);
    }
    changeName(newName: string): void {
        this.name = newName;
    }
    greatingPerson(person: Person): void {
        console.log("Hello", person.name);
    }
}


class PositivePerson implements IPerson {
    age: number;
    name: string;
    constructor( ValoueName : string, ValoueAge : number)
    {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP(): void {
        this.age +=1
    }
    callName(): void {
        console.log(`HELLO MY FRIEND!!!! MY NAME IS ${this.name}`)
    }
    callMyAge(): void {
        console.log(this.age);
    }
    changeName(newName: string): void {
        this.name = newName;
    }
    greatingPerson(person: IPerson): void {
        console.log(`HELLO MY FRIEND ${person.name}`);
    }
}

class NiggativePerson implements IPerson {
    age: number;
    name: string;
    constructor( ValoueName : string, ValoueAge : number)
    {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP(): void {
        this.age +=1
    }

    changeAge (newAge : number) {
        if (newAge < 0) {
            console.log("Слишком мало(");
        } else if (newAge > 130) {
            console.log("Столько не живут");
        } else {
            this.age = newAge;
        }

    }

    callName(): void {
        console.log(`HELLO BIUTCH!!!! MY NAME IS ${this.name}`)
    }
    callMyAge(): void {
        console.log(this.age);
    }
    changeName(newName: string): void {
        if (!newName) {

        } else {
            this.name = newName;
        }
    }
    greatingPerson(person: IPerson): void {
        console.log(`I HATE YOU ${person.name}`);
    }
}


const p1 = new PositivePerson("TOM", 222);
const p2 = new NiggativePerson("BILL", 33);



import {enterData} from "./activity/4/activity4";
enterData()
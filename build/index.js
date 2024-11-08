"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(ValoueName, ValoueAge) {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP() {
        this.age += 1;
    }
    callMyAge() {
        console.log(this.age);
    }
    callName() {
        console.log(this.name);
    }
    changeName(newName) {
        this.name = newName;
    }
    greatingPerson(person) {
        console.log("Hello", person.name);
    }
}
class PositivePerson {
    constructor(ValoueName, ValoueAge) {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP() {
        this.age += 1;
    }
    callName() {
        console.log(`HELLO MY FRIEND!!!! MY NAME IS ${this.name}`);
    }
    callMyAge() {
        console.log(this.age);
    }
    changeName(newName) {
        this.name = newName;
    }
    greatingPerson(person) {
        console.log(`HELLO MY FRIEND ${person.name}`);
    }
}
class NiggativePerson {
    constructor(ValoueName, ValoueAge) {
        this.age = ValoueAge;
        this.name = ValoueName;
    }
    growUP() {
        this.age += 1;
    }
    changeAge(newAge) {
        if (newAge < 0) {
            console.log("Слишком мало(");
        }
        else if (newAge > 130) {
            console.log("Столько не живут");
        }
        else {
            this.age = newAge;
        }
    }
    callName() {
        console.log(`HELLO BIUTCH!!!! MY NAME IS ${this.name}`);
    }
    callMyAge() {
        console.log(this.age);
    }
    changeName(newName) {
        if (!newName) {
        }
        else {
            this.name = newName;
        }
    }
    greatingPerson(person) {
        console.log(`I HATE YOU ${person.name}`);
    }
}
const p1 = new PositivePerson("TOM", 222);
const p2 = new NiggativePerson("BILL", 33);
const activity4_1 = require("./activity/4/activity4");
(0, activity4_1.enterData)();

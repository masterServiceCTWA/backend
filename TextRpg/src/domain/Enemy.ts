import { IEnemy } from "./IEnemy";
import { IUnit } from "./IUnit";

export class Enemy implements IEnemy {
    private hp : number;
    private xp : number;
    private damage : number;

    constructor(hp : number, xp : number, damage : number) {
        this.hp = hp;
        this.xp = xp;
        this.damage = damage;
    }

    getXp() : number {
        return this.xp;
    }

    getHp(): number {
        return this.hp;
    }

    getName(): string {
        return "ENEMY";
    }

    attack(unit: IUnit): boolean {
        unit.changeHp(this.damage);
        return true;
    }

    changeName(newName: string): void {
        throw new Error("Method not implemented.");
    }

    changeHp(hpReduction: number): void {
        if (this.hp <= hpReduction) {
            this.hp = 0;
        } else {
            this.hp = this.hp - hpReduction;
        }
    }



}
import { IPlayer } from "./IPlayer";
import { IUnit } from "./IUnit";

export class Player implements IUnit, IPlayer {
    
    
    private name : string;
    private hp : number = 100;
    private xp : number = 0;
    private lvl : number = 1;
    private nextLvlXp : number = 20;
    private damage : number = 20;
    private maxHp : number = 100;

    constructor(name : string) {
        this.name = name;
    }

    getXp(): number {
        return this.xp;
    }

    getNextLvlXp() : number {
        return this.nextLvlXp;
    }

    getLvl(): number {
        return this.lvl;
    }

    updateXp(xp : number) : boolean {
        if (xp + this.xp >= this.nextLvlXp) {
            const toNextLvlXp = xp + this.xp - this.nextLvlXp;
            this.lvl = this.lvl + 1;
            this.xp = toNextLvlXp;
            this.levelUp();
            return true;
        } else {
            this.xp = this.xp + xp;           
            return false;
        }
    }
    
    getHp(): number {
        return this.hp;
    }

    getName(): string {
        return this.name;
    }

    attack(unit: IUnit) : boolean {
        unit.changeHp(this.damage);
        return true;
    }

    changeName(newName: string) : void {
        if (newName) {
            this.name = newName;
        }
    }

    changeHp(hpReduction: number) : void {
        if (this.hp < hpReduction) {
            this.hp = 0;
        } else {
            this.hp = this.hp - hpReduction;
        }
    }

    private levelUp () : void {
        this.maxHp = this.maxHp + 10;
        this.hp = this.maxHp;
        this.damage = this.damage + 10;                    
        this.nextLvlXp = this.nextLvlXp + 10;
    }

}
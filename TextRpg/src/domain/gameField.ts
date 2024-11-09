import { Enemy } from "./Enemy";
import { IEnemy } from "./IEnemy";
import { IUnit } from "./IUnit";
import { Player } from "./player";

export class GameField {

    private player? : Player;
    private enemy? : IEnemy;

    
    private static instance : GameField;

    static getInstance() : GameField {
        if (!GameField.instance) {
            GameField.instance = new GameField();
            return GameField.instance;
        } else {
            return GameField.instance;
        }
    } 

    getPlayer () : Player {
        return this.player;
    }

    getEnemy() : IUnit {
        if (!this.enemy) {
            throw new Error("Противник еще не создан");
        }
        return this.enemy;
    }
 
    createPlayer (name : string) : Player {
        this.player = new Player(name);
        return this.player;
    } 

    createEnemy () : IUnit {
        if (!this.player) {
            throw new Error(`Еще не создан персонаж`);
        }
        const lvl = this.player.getLvl();
        const hp = 20 * lvl;
        const xp = 5 * lvl;
        const damage = 5 * lvl;
        
        this.enemy = new Enemy(
            hp, xp,damage
        )
        return this.enemy;
    }

    attack( callBack : (data : string) => void ) {
        if (!this.enemy || ! this.player) {
            throw new Error(`Еще не готово`);
        }
        this.player?.attack(this.enemy);
        if (this.enemy.getHp() === 0) {
            callBack(`Противник уничтожен`);
            const isLvlUp = this.player.updateXp(this.enemy.getXp());
            this.enemy = undefined;
            if (isLvlUp) {
                callBack("Повышен уровень");
            }
        } else {
            this.enemy.attack(this.player);
            callBack(`Противник бьет в ответ`);
            if (this.player.getHp() === 0) {
                callBack(`Противник победил!`);
                this.player = undefined;
            }
        }
    }

}
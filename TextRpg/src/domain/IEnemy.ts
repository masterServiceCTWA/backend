import { IUnit } from "./IUnit";

export interface IEnemy extends IUnit {
    // Получение опыта от убийства этого персонажа
    getXp() : number;
}
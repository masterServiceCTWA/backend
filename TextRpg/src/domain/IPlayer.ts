export interface IPlayer {
    // Получить текущее колчество опыта
    getXp () : number;
    // Получить количество опыта до следующего уровня
    getNextLvlXp () : number;
    // Получить текущий уровень
    getLvl () : number;
    // Увеличить опыт
    updateXp (xp : number) : boolean;
}
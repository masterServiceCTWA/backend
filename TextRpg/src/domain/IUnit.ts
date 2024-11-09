export interface IUnit {

    // Получить текущее количество ХП
    getHp() : number;
    // Получить имя первоснажа
    getName() : string;
    // Атака другого персонажа
    attack(unit : IUnit) : boolean;
    // Смена имени
    changeName(newName : string) : void;
    // Изменить состояние ХП
    changeHp(hpReduction : number) : void;
    
}
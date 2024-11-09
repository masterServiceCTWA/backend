import { createEnemyCommand, attackCommand} from "../commands/battleCommand";
import {GameField} from '../../../domain/gameField'



const callback = (data : string) : void => {
    console.log(data);
} 

export class BattleController {
    enter(data : string[]) {
        try {
            switch(data[0]) {
                case createEnemyCommand : {
                    GameField.getInstance().createEnemy(); 
                    break;
                }
                case attackCommand : {
                    GameField.getInstance().attack(callback);
                    break;
                }
                default : {
                    console.log(`Неизвестная команда`)
                    break;
                }
            }
        } catch(e) {
            console.log(e);
        }      
    }
}

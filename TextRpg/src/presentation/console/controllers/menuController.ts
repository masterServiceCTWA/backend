import { helpCommand, startGameCommand} from "../commands/menuCommand";
import { createEnemyCommand, attackCommand} from "../commands/battleCommand";
import { GameField } from "../../../domain/gameField";

export class MenuController {
    enter(data : string[]) {
        try {
            switch(data[0]) {
                case helpCommand : {
                    console.log(
                        ` команда ${startGameCommand} <имя>  - начало новой игры \n`+
                        ` команда ${createEnemyCommand} - поиск соперника \n`+
                        ` команда ${attackCommand} - атаковать соперника \n`);
                    break;
                }
                case startGameCommand: {
                    const player = GameField.getInstance().getPlayer();
                    if (player) {
                        console.log("Игрок уже создан");
                    } else {
                        const playerName = data[1];
                        if (!playerName) {
                            console.log("Имя не введено");
                        } else {
                            const player = GameField.getInstance().createPlayer(data[1]);
                            console.log(`Персонаж с именем ${player.getName()} создан`);
                        }
                    }
                    break;
                }
                default : {
                    console.log(`неизвестная команда`)
                    break;
                }
            }
        } catch(e) {
            console.log(e)
        }
        
    }
}
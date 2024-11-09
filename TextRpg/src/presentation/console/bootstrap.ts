import readline from 'readline';
import * as dotenv from "dotenv";
import {attackCommand, createEnemyCommand} from "./commands/battleCommand";
import {helpCommand,startGameCommand} from "./commands/menuCommand";
import { BattleController } from './controllers/battleController';
import { MenuController } from './controllers/menuController';

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function enterData() {
  rl.question('Введите данные: ', (data : string) => {
    const commands = data.split(" ");
    switch(commands[0]) {
      case attackCommand:
      case createEnemyCommand: {
        new BattleController().enter(commands);
        break;
      }
      case helpCommand:
      case startGameCommand : {
        new MenuController().enter(commands);
        break;
      }
      default : {
        console.log("неизвестная команда");
        break;
      }
    }
    enterData();
  });
}

export const start = () => {
  enterData();
}
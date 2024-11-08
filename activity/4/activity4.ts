
/*
    ПРАКТИКА - пишем консольное приложение 
*/

import readline from 'readline';
import * as dotenv from "dotenv";
dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function enterData() {
  rl.question('Введите данные: ', (data : string) => {
    const parametr1 = Number(data.split(" ")[0]);
    const operation = data.split(" ")[1];
    const parametr2 = Number(data.split(" ")[2]);
    
    //
      // BODY
    // 
    enterData();
  });
}
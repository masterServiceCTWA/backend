import { v4 } from "uuid";
import { Account } from "../../domain/account";
import { IAccountRepository } from "../interfaces/IAccountRepository";

export class AccountLocalRepository implements IAccountRepository {
    
    static storage : Account[] = [];
    
    get(chatId: string): Account {
        const findetAccount = AccountLocalRepository.storage.find( (element)=> 
            { 
                if (element.chatId === chatId) 
                {
                    return true;
                }
            }
        );   
        return findetAccount;
    }

    getAll(): Account[] {
        return AccountLocalRepository.storage;
    }

    create(chatId: string, userName: string): Account {
        const newAccount : Account = {
            chatId : chatId,
            userName : userName,
            id : v4()
        }
        AccountLocalRepository.storage.push(newAccount);
        return newAccount;
    }

    delete(id: string): void {
        AccountLocalRepository.storage = AccountLocalRepository.storage.filter(
            (element) => {
                if (element.id !== id) {
                    return true;
                }
                    return false;
            }
        )
    }

    update(chatId: string, useName: string): Account {
        const acc = this.get(chatId);
        acc.userName = useName;
        this.delete(acc.id);
        AccountLocalRepository.storage.push(acc);
        return acc;
    }

    

}
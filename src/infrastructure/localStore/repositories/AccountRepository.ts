import { v4 } from "uuid";
import { IAccountRepository } from "../../../app/interfaces/IAccountRepository";
import { Account } from "../../../domain/account";

export class AccountLocalRepository implements IAccountRepository {
    
    private static storage : Account[] = [];
    
    create(chatId: string, userName : string): Account {
        const newAccount : Account = {
            chatId : chatId,
            id : v4(),
            userName : userName
        }
        AccountLocalRepository.storage.push(newAccount);
        return newAccount;
    }

    getAll(): Account[] {
        return AccountLocalRepository.storage;
    }

    get(chatId: string): Account {
        const findeAccount = AccountLocalRepository.storage.find(
            (account)=> 
            {
                if (account.chatId === chatId) 
                {
                    return true;
                }
                return false;
            }
        );
        return findeAccount;
    }

    delete(chatId: string): void {
        AccountLocalRepository.storage = AccountLocalRepository.storage.filter(
            (account)=> {
                if (account.chatId !== chatId) {
                    return true;
                }
                return false;
            }
        );
    }

    update(chatId : string, userName: string): Account {
        const accountToUpdate = this.get(chatId);
        accountToUpdate.userName = userName;
        this.delete(chatId);
        AccountLocalRepository.storage.push(accountToUpdate);
        return accountToUpdate;
    }
}
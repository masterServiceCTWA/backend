import { v4 } from "uuid";
import { Account } from "../../domain/account";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { LinkedList, LinkedListNode } from "../../../activity/8/activity8";

export class AccountLocalLLRepository implements IAccountRepository {
    
    static storage : LinkedList<Account> = new LinkedList();
    
    get(chatId: string): Account {
        const findetAccount = AccountLocalLLRepository.storage.find( (element)=> 
            { 
                if (element.value.chatId === chatId) 
                {
                    return true;
                }
            }
        );   
        return findetAccount.value;
    }

    getAll(): Account[] {
        const accountMassive : Account[] = AccountLocalLLRepository.storage.map<Account>( 
            (element) => {
                return element.value;
            }      
        );
        return accountMassive;
    }

    create(chatId: string, userName: string): Account {
        const newAccount : Account = {
            chatId : chatId,
            userName : userName,
            id : v4()
        }
        const newNode = new LinkedListNode<Account>();
        newNode.value = newAccount;
        AccountLocalLLRepository.storage.push(newNode);
        return newAccount;
    }

    delete(id: string): void {
        const existingAcocunt = this.getById(id);
        if (!existingAcocunt) {
            throw new Error(`Аккаунт с id ${id} не найден`);
        }
        const newStorage = AccountLocalLLRepository.storage.filter(
            (element) => {
                if (element.value.id !== id) {
                    return true;
                }
                    return false;
            }
        );
        AccountLocalLLRepository.storage = newStorage;
    }

    update(chatId: string, useName: string): Account {
        const acc = this.get(chatId);
        acc.userName = useName;
        this.delete(acc.id);
        const newNode = new LinkedListNode<Account>();
        newNode.value = acc;
        AccountLocalLLRepository.storage.push(newNode);
        return acc;
    }


    
    private getById(id: string) : Account {
        const findetAccount = AccountLocalLLRepository.storage.find( (element)=> 
            { 
                if (element.value.id === id) 
                {
                    return true;
                }
            }
        );   
        return findetAccount.value;
    }

}
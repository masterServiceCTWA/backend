import { v4 } from "uuid";
import { BinarySearchTree, BinarySearchTreeNode } from "../../../activity/8/activity8";
import { Account } from "../../domain/account";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { ExtendetAccount } from "./extendetAccount";



export class AccountLocalBSTRepository implements IAccountRepository {
    static storage : BinarySearchTree<ExtendetAccount> = new BinarySearchTree();
    
    get(chatId: string): Account {
        const findetAccount = AccountLocalBSTRepository.storage.find( (element)=> 
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
        const accountMassive : Account[] = AccountLocalBSTRepository.storage.map<Account>( 
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
        const newNode = new BinarySearchTreeNode<ExtendetAccount>();
        const newExtendetAccount = new ExtendetAccount(newAccount);
        newNode.value = newExtendetAccount;
        AccountLocalBSTRepository.storage.push(newNode);
        return newAccount;
    }

    delete(id: string): void {
        const existingAcocunt = this.getById(id);
        if (!existingAcocunt) {
            throw new Error(`Аккаунт с id ${id} не найден`);
        }
        const newStorage = AccountLocalBSTRepository.storage.filter(
            (element) => {
                if (element.value.id !== id) {
                    return true;
                }
                    return false;
            }
        );
        AccountLocalBSTRepository.storage = newStorage;
    }

    update(chatId: string, useName: string): Account {
        const acc = this.get(chatId);
        acc.userName = useName;
        this.delete(acc.id);
        const newNode = new BinarySearchTreeNode<ExtendetAccount>();
        const newExtendetAccount = new ExtendetAccount(acc);
        newNode.value = newExtendetAccount;
        AccountLocalBSTRepository.storage.push(newNode);
        return acc;
    }


    
    private getById(id: string) : Account {
        const findetAccount = AccountLocalBSTRepository.storage.find( (element)=> 
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
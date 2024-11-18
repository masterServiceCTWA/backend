import { Account } from "../../domain/account";




export interface IAccountRepository {
    get(chatId : string) : Account;
    getAll() : Account[];
    create(chatId : string, userName : string) : Account;
    update(chatId : string, userName : string) : Account;
    delete(id : string) : void;
}
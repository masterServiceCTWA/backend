import { Account } from "../../domain/account";

export interface IAccountRepository {
    create(chatId : string, userName : string) : Account ;
    getAll() : Account[];
    get(chatId : string) : Account;
    delete (chatId : string) : void;
    update(chatId : string, userName : string) : Account;
}
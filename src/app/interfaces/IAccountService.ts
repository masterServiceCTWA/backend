import { Account } from "../../domain/account";

export interface IAccountService {
    createAccount(chatId : string, userName : string) : Account ;
    getAllAccounts() : Account[];
    getAccount(chatId : string) : Account;
    deleteAccount (chatId : string) : void;
    updateAccount(chatId : string, userName : string) : Account;
}
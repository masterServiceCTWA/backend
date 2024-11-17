import { Account } from "../../domain/account";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { IAccountService } from "../interfaces/IAccountService";

export class AccountService implements IAccountService {

    private readonly accountRepository : IAccountRepository;

    constructor(
        accountRepository : IAccountRepository
    ) {
        this.accountRepository = accountRepository;
    }
    


    createAccount(chatId: string, userName: string): Account {
        return this.accountRepository.create(chatId, userName);
    }

    getAllAccounts(): Account[] {
        return this.accountRepository.getAll();
    }

    getAccount(chatId: string): Account {
        return this.accountRepository.get(chatId);
    }

    deleteAccount(chatId: string): void {
        return this.accountRepository.delete(chatId);
    }
    
    updateAccount(chatId: string, userName: string): Account {
        return this.accountRepository.update(chatId, userName);
    }

}
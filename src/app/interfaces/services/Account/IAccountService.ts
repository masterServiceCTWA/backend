import { Account } from "../../../../domain/Account/Account";

export interface IAccountService {
    update (account : Account) : Promise<Account>;
}
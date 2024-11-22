import { IComparable } from "../../../activity/8/activity8";
import { Account } from "../../domain/account";

export class ExtendetAccount extends Account implements IComparable {

    constructor(account: Account) {
        super();
        this.chatId = account.chatId;
        this.userName = account.userName;
        this.id = account.id;
    }

    compare(compareObject: ExtendetAccount, compareSubject: ExtendetAccount): boolean {
        const answer = compareObject.chatId.localeCompare(compareSubject.chatId);
        if (answer === -1) {
            return true;
        } return false;
    }
}
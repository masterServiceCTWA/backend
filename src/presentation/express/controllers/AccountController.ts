import { Request, response, Response } from "express";
import { IAccountService } from "../../../app/interfaces/IAccountService";
import { Account } from "../../../domain/account";




export class AccountController {

    accountService : IAccountService;

    constructor( 
        accountService : IAccountService
    ) {
        this.accountService = accountService;
    }


    createAccount(request : Request, response : Response) {
        const data : { userName : string, chatId : string } = request.body;
        const acc : Account = this.accountService.createAccount(data.chatId, data.userName);
        return response.json(acc).status(200);
    }

    getAllAccounts(request : Request, response : Response) {
        const allAccs : Account[] = this.accountService.getAllAccounts();
        return response.json(allAccs).status(200);
    }

    getAccount(request : Request, response : Response) {
        const {chatId} = request.query;
        const findetAccount : Account = this.accountService.getAccount(String(chatId)); 
        return response.json(findetAccount).status(200);

    }

    deleteAccount(request : Request, response : Response) {
        const {chatId} = request.query;
        this.accountService.deleteAccount(String(chatId));
        return response.json({message : "deleted"}).status(200);
    }
    
    updateAccount(request : Request, response : Response) {
        const data : {chatId : string, userName : string} = request.body;
        const updatedAccoutn = this.accountService.updateAccount(data.chatId, data.userName);
        return response.json(updatedAccoutn).status(200);
    }

}
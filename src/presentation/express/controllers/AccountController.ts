import { Request, Response } from "express";
import { IAccountRepository } from "../../../app/interfaces/IAccountRepository";




export class AccountController {


    accountRepository : IAccountRepository;

    constructor(accountRepository : IAccountRepository) {
        this.accountRepository = accountRepository;
    }


    get( request : Request, response : Response  ) {
        const {chatid} = request.query;
        if (!chatid) {
            return response.status(400).json({message : "нет chatId"});
        }
        const acc = this.accountRepository.get(String(chatid));
        return response.status(200).json(acc);
    }

    getAll(request : Request, response : Response  ) {
        const accs =  this.accountRepository.getAll();
        return response.status(200).json(accs);
    }

    create(request : Request, response : Response  ) {
        console.log(request.url);
        console.log(request.body);
        const data : {chatId : string, userName : string} = request.body;
        const newAcc = this.accountRepository.create(data.chatId,data.userName);
        return response.status(200).json(newAcc);
    }

    update(request : Request, response : Response  ) {
        const data : {chatId : string, userName : string} = request.body;
        const newAcc = this.accountRepository.update(data.chatId,data.userName);
        return response.status(200).json(newAcc);
    }
    
    delete(request : Request, response : Response  ) {
        const {id} = request.query;
        this.accountRepository.delete(String(id));
        return response.status(200).json({message : "Удалено"});
    }

}
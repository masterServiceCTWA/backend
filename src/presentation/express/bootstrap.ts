import express from "express";
import { IAccountRepository } from "../../app/interfaces/IAccountRepository";
import { AccountLocalRepository } from "../../infrastructure/localStore/repositories/AccountRepository";
import { IAccountService } from "../../app/interfaces/IAccountService";
import { AccountService } from "../../app/services/AccountService";
import { AccountController } from "./controllers/AccountController";

const app = express();
const PORT = 3000;


const accountRepository : IAccountRepository = new AccountLocalRepository(); 
const accountService : IAccountService = new AccountService(accountRepository);
const accountController : AccountController = new AccountController(accountService);

app.use(express.json());


app.get("/accounts" , (req,res) => {accountController.getAllAccounts(req,res)});

app.get("/account" , (req,res) => {accountController.getAccount(req,res)});

app.post("/account", (req,res) => {accountController.createAccount(req,res)});

app.delete("/account", (req,res)=>{accountController.deleteAccount(req,res)});

app.put("/account", (req,res) => {accountController.updateAccount(req,res)});


export const start = () => {
    app.listen(PORT, () => {
        console.log(`STARTED ON ${PORT}`);
    });
};
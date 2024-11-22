import express, { Request, Response } from "express";
import cors from "cors";
import { AccountLocalRepository } from "../../app/repository/AccountRepository";
import { AccountController } from "./controllers/AccountController";
import { AccountLocalLLRepository } from "../../app/repository/AccountLLRepository";
import { AccountLocalBSTRepository } from "../../app/repository/AccountBSTRepository";


const accountRepository = new AccountLocalLLRepository();
const accountController = new AccountController(accountRepository);

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get( "/accounts", (req : Request, res : Response) => {accountController.getAll(req,res)});
app.get( "/account", (req : Request, res : Response) => {accountController.get(req,res)});
app.post( "/account", (req : Request, res : Response) => {accountController.create(req,res)});
app.put( "/account", (req : Request, res : Response) => {accountController.update(req,res)});
app.delete( "/account", (req : Request, res : Response) => {accountController.delete(req,res)});


export const start = () => {
    app.listen(
        PORT ,  () => {console.log(`СЕРВЕР ЗАПУЩЕН`)}
    )
}
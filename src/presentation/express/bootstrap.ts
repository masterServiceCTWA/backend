import express, { Request, Response } from "express";
import { AccountLocalRepository } from "../../app/repository/AccountRepository";
import { AccountController } from "./controllers/AccountController";


const accountRepository = new AccountLocalRepository();
const accountController = new AccountController(accountRepository);

const PORT = 3000;
const app = express();
app.use(express.json());


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
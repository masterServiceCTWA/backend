import { NextFunction, Request, Response } from "express";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { IAuthService } from "../../../../app/interfaces/services/Auth/IAuthService";
import { inject } from "inversify";







@controller("/auth")
export class AuthController {

    private readonly authService : IAuthService;

    constructor(
       authService : IAuthService
    ) {
        this.authService = authService;
    }

    @httpGet("/twa/registration")
    twaRegistration(request : Request, response : Response, next : NextFunction) {
        console.log(request.url);
        console.log(JSON.stringify(this.authService));
        return response.status(200).send("ok");
    }

    @httpGet("/tg/registration")
    tgRegistration(request : Request, response : Response, next : NextFunction) {  
        console.log(request.url);
        console.log(JSON.stringify(this.authService));
        return response.status(200).send("ok");
    }
}
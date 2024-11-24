export interface IAuthService {
    tgRegistration (userName : string, chatId : string) : Promise<void>; 
}
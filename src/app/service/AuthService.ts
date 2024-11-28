import { IAuthService } from "../interfaces/services/Auth/IAuthService";


export class AuthService implements IAuthService {
    tgRegistration(userName: string, chatId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
import { IUserRepository } from "../../../app/interfaces/IUserRepository";
import { User } from "../../../domain/user";

export class UserLocalRepository implements IUserRepository {
    
    

    createUser(chatId: string): User {
        throw new Error("Method not implemented.");
    }

    getAll(): User[] {
        throw new Error("Method not implemented.");
    }

    getOneByChatId(chatId: string): User {
        throw new Error("Method not implemented.");
    }

    getOneById(id: string): User {
        throw new Error("Method not implemented.");
    }

    deleteUser(chatId: string): void {
        throw new Error("Method not implemented.");
    }
}
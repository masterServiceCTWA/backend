import { User } from "../../domain/user";

export interface IUserRepository {
    createUser(chatId : string) : User ;
    getAll() : User[];
    getOneByChatId(chatId : string) : User;
    getOneById (id : string) : User;
    deleteUser (chatId : string) : void;
}
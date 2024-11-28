import { Container, interfaces } from "inversify";
import { AuthController } from "../controllers/Auth/AuthController";
import { IAuthService } from "../../../app/interfaces/services/Auth/IAuthService";
import { AuthService } from "../../../app/service/AuthService";

export const container = new Container();

container.bind<IAuthService>("IAuthService").to(AuthService);
container.bind<AuthController>(AuthController).toSelf();
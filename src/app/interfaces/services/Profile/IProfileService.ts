import { ProfileContent } from "../../../../domain/Profile/ProfileContent";

export interface IProfileService {
    get () : Promise<ProfileContent[]>;
    create (accountId : string,
        professionId : string,
        description : string,
        text : string,
        imageUrl? : string,
    ) : Promise<ProfileContent>;
    update (profileContent : ProfileContent) : Promise<ProfileContent>;
    delete (id : string) : Promise<void>;
}
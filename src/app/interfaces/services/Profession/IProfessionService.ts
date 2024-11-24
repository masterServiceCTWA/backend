export interface IProfessionService {
    join (accountId : string, professionId : string): Promise<void>;
    leave (accountId : string, professionId : string) : Promise<void>;
}
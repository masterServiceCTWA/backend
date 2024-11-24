import { TimeSlot } from "../../../../domain/Timeslot/TimeSlot";

export interface ITimeSlotMasterService {
    my (accountId : string) : Promise<TimeSlot[]>;
    create (offerId : string, startDate : Date, endDate : Date) : Promise<TimeSlot>;
    update (timeSlot : TimeSlot) : Promise<TimeSlot>;
    delete (id : string) : Promise<void>;
}
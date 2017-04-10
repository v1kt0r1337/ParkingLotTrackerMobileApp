/**
 * Created by archheretic on 10.04.17.
 */
import {Serializable} from "./Serializer";
export class ParkingLog implements Serializable<ParkingLog> {
    id: number;
    currentParked: number;
    historicParkCount: number;
    logDate: string;
    parkingLot_id: number;

    deserialize(input) {
        this.id = input.id;
        this.currentParked = input.currentParked;
        this.historicParkCount = input.historicParkCount;
        this.logDate = input.logDate;
        this.parkingLot_id = input.parkingLot_id;
        return this;
    }
}

import {Serializable} from "./Serializer";
/**
 * Created by archheretic on 06.04.17.
 */
export class ParkingLot implements Serializable<ParkingLot> {
    id: number;
    name: string;
    capacity: number;
    reservedSpaces: number;

    deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        this.capacity = input.capacity;
        this.reservedSpaces = input.reservedSpaces;
        return this;
    }
}

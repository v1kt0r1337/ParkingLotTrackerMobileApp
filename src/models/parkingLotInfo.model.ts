/**
 * Created by archheretic on 17.04.17.
 * This is an aggregated class containing information from parkingLot and parkingLog relevant for the
 * user interface.
 */

export class ParkingLotInfo {
    name: string;
    capacity: number;
    reservedSpaces: number;
    freeSpaces: number;
}
//
// parkingLotText += i + 1 + ". " + parkingLots[i].name + "\nLedige plasser: " +
//     (parkingLots[i].capacity - parkingLog.currentParked) + "\nTotal Kapasitet: " + parkingLots[i].capacity
//     + "\nReserverte parkeringer: " + parkingLots[i].reservedSpaces + "\n";
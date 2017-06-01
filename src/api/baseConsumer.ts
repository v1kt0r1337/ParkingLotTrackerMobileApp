/**
 * Created by archheretic on 05.04.17.
 */
import {ParkingLot} from "../models/parkingLot.model";
import {ParkingLog} from "../models/parkingLog.model";
import {ParkingLotInfo} from "../models/parkingLotInfo.model";


const baseUrl: string = "http://158.37.63.8";
const parkinglots: string = "/api/v0/parkinglots";
const latestParkingLog: string = "/api/v0/parkinglogs/latest";

export class BaseConsumer {
    public async getAllParkinglots() {
        try {
            const response = await fetch(baseUrl + parkinglots, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const responseJson = await response.json();
            const parkingLots: ParkingLot[] = responseJson.parkingLots;
            return parkingLots;
        }
        catch (error) {
            console.error(error);
        }
    }

    public async getLatestParkinglog() {
        try {
            const response = await fetch(baseUrl + latestParkingLog, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const responseJson = await response.json();
            const parkingLogs: ParkingLog = responseJson.parkingLogs[0];
            return parkingLogs;
        }
        catch (error) {
            console.error(error);
        }
    }

    public async getLatestParkinglogBasedOnParkingLotId(parkingLotId: number) {
        try {
            console.log(baseUrl + latestParkingLog + "/" + parkingLotId);
            const response = await fetch(baseUrl + latestParkingLog + "/" + parkingLotId, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const responseJson = await response.json();
            const parkingLog: ParkingLog = responseJson.parkingLogs[0];
            return parkingLog;
        }
        catch (error) {
            console.error(error);
        }
    }

    /**
     * This method should not be here
     * Returns an array containing data that can be displayed in the mobile application.
     */
    public async getParkingLotInfo() {
        const parkingLots: ParkingLot[] = await this.getAllParkinglots();
        let infoArray: ParkingLotInfo[] = new Array<ParkingLotInfo>();
        let parkingLog: ParkingLog;
        for (let i = 0; i < parkingLots.length; i++) {
            parkingLog = await this.getLatestParkinglogBasedOnParkingLotId(parkingLots[i].id);
            const parkingLotInfo: ParkingLotInfo = {
                name: parkingLots[i].name,
                freeSpaces: (parkingLots[i].capacity - parkingLog.currentParked),
                capacity: parkingLots[i].capacity,
                reservedSpaces: parkingLots[i].reservedSpaces,
                latlng: { latitude: parkingLots[i].lat,
                longitude: parkingLots[i].lng }
            };
            infoArray.push(parkingLotInfo);
        }
        return infoArray;
    }

    //// similar method using promises.
    // public getAllParkinglots() {
    //     fetch(baseUrl + parkinglots, {
    //         method: "GET",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson);
    //             return responseJson;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
}

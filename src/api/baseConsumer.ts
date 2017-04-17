/**
 * Created by archheretic on 05.04.17.
 */
import {ParkingLot} from "../models/parkingLot.model";
import {ParkingLog} from "../models/parkingLog.model";

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

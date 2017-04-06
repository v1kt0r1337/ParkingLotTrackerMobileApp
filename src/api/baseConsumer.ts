/**
 * Created by archheretic on 05.04.17.
 */

const baseUrl: string = "http://158.37.63.8";
const parkinglots: string = "/api/v0/parkinglots";

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
            console.log("responseJson");
            console.log(responseJson);
            return responseJson;
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

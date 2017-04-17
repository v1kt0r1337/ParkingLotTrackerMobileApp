/**
 * Created by archheretic on 04.04.17.
 */

import *  as React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from "react-native";
import PureComponent = React.PureComponent;
import { BaseConsumer } from "./api/baseConsumer";
import {ParkingLot} from "./models/parkingLot.model";
import {ParkingLog} from "./models/parkingLog.model";


const baseConsumer = new BaseConsumer();

export interface Props {}

export interface State {
    titleText: string;
    parkingLotText: string;
    // parkingLogText: string;
}

export default class ParkingLotTrackerMobileApp extends PureComponent<Props, State> {
    // test: any = baseConsumer.getAllParkinglots();
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Parkeringsplasser",
            parkingLotText: "Trøbbel på linja!"
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        const parkingLots: ParkingLot[] = await baseConsumer.getAllParkinglots();
        let parkingLogs: ParkingLog[] = new Array<ParkingLog>();
        let parkingLog: ParkingLog;
        let parkingLotText: string = "";
        for (let i = 0; i < parkingLots.length; i++) {
            parkingLog = await baseConsumer.getLatestParkinglogBasedOnParkingLotId(parkingLots[i].id);
            // parkingLogs.push(parkingLog);
            parkingLotText += i + 1 + ". " + parkingLots[i].name + "\nLedige plasser: " +
                (parkingLots[i].capacity - parkingLog.currentParked) + "\nTotal Kapasitet: " + parkingLots[i].capacity
                + "\nReserverte parkeringer: " + parkingLots[i].reservedSpaces + "\n";
        }

        /*
        let parkingLogText: string = "";
        for (let i = 0; i < parkingLogs.length; i++) {
            parkingLogText += "\nparkingLot_id: " + parkingLogs[i].parkingLot_id + "\nOpptatte plasser: " + parkingLogs[i].currentParked
                 + "\n";
        }
        */

        this.setState({parkingLotText: parkingLotText});
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {this.state.titleText}
                    {"\n"}
                    {this.state.parkingLotText}
                </Text>
            </View>
            </ScrollView>
        );
    }
}

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

AppRegistry.registerComponent("ParkingLotTrackerMobileApp", () => ParkingLotTrackerMobileApp);
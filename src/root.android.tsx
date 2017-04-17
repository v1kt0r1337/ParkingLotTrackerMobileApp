/**
 * Created by archheretic on 04.04.17.
 */

import *  as React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView, ListView, ListViewDataSource
} from "react-native";
import PureComponent = React.PureComponent;
import { BaseConsumer } from "./api/baseConsumer";
import {ParkingLot} from "./models/parkingLot.model";
import {ParkingLog} from "./models/parkingLog.model";
import {ParkingLotInfo} from "./models/parkingLotInfo.model";



const baseConsumer = new BaseConsumer();

export interface Props {}

export interface State {
    titleText: string;
    dataSource: ListViewDataSource;
}

export default class ParkingLotTrackerMobileApp extends PureComponent<Props, State> {
    // test: any = baseConsumer.getAllParkinglots();
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            titleText: "Parkeringsplasser",
            dataSource: ds.cloneWithRows(["No data"])
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const parkingLotInfo: ParkingLotInfo[] = await baseConsumer.getParkingLotInfo();
        this.setState({dataSource: ds.cloneWithRows(parkingLotInfo)});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.state.titleText}
                </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        if (rowData.name === undefined) {
                            return (
                                <Text style={styles.parkingLotName}>
                                    {"Ingen parkeringsplasser funnet"}
                                </Text>
                            )
                        }

                        let backgroundColor = "#08b243";
                        if (rowData.freeSpaces <= rowData.reservedSpaces && rowData.freeSpaces !== 0) {
                            backgroundColor = "orange";
                        }
                        else if (rowData.freeSpaces === 0) {
                            backgroundColor = "red";
                        }
                        return (
                        <Text style={styles.parkingLotName}>
                            {rowData.name}
                            <Text style={styles.parkingLotContent}>
                                {"\n"}
                                <Text style={[styles.parkingLotFreeSpaces, {backgroundColor: backgroundColor}]}>
                                    Ledige plasser {rowData.freeSpaces}
                                </Text>
                                {"\n"}
                                Reservert {rowData.reservedSpaces}
                                {"\n"}
                                Kapasitet {rowData.capacity}
                            </Text>
                        </Text>
                    )}
                    }
                />
            </View>
        );
    }
}

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    title: {
        fontSize: 24,
        color: "#000000",
        margin: 10,
        fontWeight: "bold"
    },
    parkingLotName: {
        fontSize: 18,
        textAlign: "left",
        color: "#333333",
        marginBottom: 15,
    },
    parkingLotFreeSpaces: {
        backgroundColor: "#08b243",
        // paddingLeft: 15,
        // paddingRight: 15,
        fontSize: 16,
        textAlign: "left",
        color: "#333333",
        marginBottom: 15,
    },
    parkingLotContent: {
        fontSize: 16,
        textAlign: "left",
        color: "#333333",
        marginBottom: 15,
    }
});

AppRegistry.registerComponent("ParkingLotTrackerMobileApp", () => ParkingLotTrackerMobileApp);
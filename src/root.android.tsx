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

const baseConsumer = new BaseConsumer();

export interface Props {}

export interface State {
    titleText: string;
    bodyText: any;
}

export default class ParkingLotTrackerMobileApp extends PureComponent<Props, State> {
    // test: any = baseConsumer.getAllParkinglots();
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Parkeringsplasser generell informasjon",
            bodyText: "Trøbbel på linja!"
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        const parkingLots: ParkingLot[] = await baseConsumer.getAllParkinglots();
        let bodyText: string = "";
        for (let i = 0; i < parkingLots.length; i++) {
            bodyText += i + 1 + ". " + parkingLots[i].name + "\nKapasitet: " + parkingLots[i].capacity
                + "\nServerte parkeringer: " + parkingLots[i].reservedSpaces + "\n";
        }
        this.setState({bodyText: bodyText});
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native with TypeScript!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{"\n"}
                    Shake or press menu button for dev menu
                </Text>
                <Text style={styles.instructions}>
                    {this.state.titleText}
                    {"\n"}
                    {this.state.bodyText}
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
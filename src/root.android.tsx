/**
 * Created by archheretic on 04.04.17.
 */

import *  as React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";
import PureComponent = React.PureComponent;
import { BaseConsumer } from "./api/baseConsumer";

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
            titleText: "API Data",
            bodyText: "Data incoming!"
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        this.setState({titleText: "API Data Updated", bodyText: JSON.stringify(await baseConsumer.getAllParkinglots())}) ;
    }

    render() {
        console.log("heey");
        // console.log(test);
        return (
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
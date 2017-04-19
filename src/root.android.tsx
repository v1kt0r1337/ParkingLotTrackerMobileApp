/**
 * Created by archheretic on 04.04.17.
 */
import * as React from "react";
import {
    AppRegistry,
    Text
} from "react-native";
import { StackNavigator } from "react-navigation";
import {MapScreen} from "./views/mapScreen";
import {HomeScreen} from "./views/homeScreen";
import {SettingsScreen} from "./views/settingsScreen";

import { TabNavigator } from "react-navigation";


const ParkingLotTrackerMobileApp = TabNavigator({
    Hjem: { screen: HomeScreen },
    Kart: { screen: MapScreen },
    Innstillinger: { screen: SettingsScreen },

});

AppRegistry.registerComponent("ParkingLotTrackerMobileApp", () => ParkingLotTrackerMobileApp);

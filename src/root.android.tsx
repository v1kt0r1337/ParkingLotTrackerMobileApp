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
import Component = React.Component;

export interface Props {}

export interface State {}

export default class ParkingLotTrackerMobileApp extends Component<Props, State> {
  render() {
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
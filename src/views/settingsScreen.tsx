/**
 * Created by archheretic on 19.04.17.
 */
/**
 * Created by archheretic on 19.04.17.
 */
import * as React from "react";
import {
    AppRegistry,
    Text
} from "react-native";
import { StackNavigator } from "react-navigation";

import { TabNavigator } from "react-navigation";

export interface Props {
    navigation: any;
}

export interface State {}
export class SettingsScreen extends React.Component<Props, State> {
    render() {
        return <Text>Innstillinger</Text>
    }
}

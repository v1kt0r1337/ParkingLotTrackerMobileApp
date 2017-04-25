/**
 * Created by archheretic on 19.04.17.
 *
 * Error: Element type is invalid: expected a string (for built-in components) or a class/function
 * (for composoite components) but got: undefined. Check the render method for `MapScreen`.
 */
import * as React from "react";
import {
    StyleSheet,
    View,
    Text,
    ViewStyle,
    ImageStyle
} from "react-native";
//import * as nativeMaps from 'react-native-maps';
//import {MapView} from nativeMaps;

const MapView = require('react-native-maps');

export interface Props {
    navigation: any;
}

export interface State {}

export class MapScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    //
    // render() {
    //     return <Text>hei</Text>rr
    // }
    render() {
        console.log("MapView:");

        console.log(MapView);
        return (
            <MapView
                style={styles.container}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
        );

    }
}

interface Style {
    container: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,  }
});

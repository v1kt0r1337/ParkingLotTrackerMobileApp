/**
 * Created by archheretic on 19.04.17.
 */
import * as React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import MapView from 'react-native-maps';

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
    //     return <Text>hei</Text>
    // }
    render() {
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

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
    }
});

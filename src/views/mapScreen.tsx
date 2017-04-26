/**
 * Created by archheretic on 19.04.17.
 *
 * Solution for finding correct latitude- and longitude delta was inspired by
 * http://stackoverflow.com/questions/30606827/set-the-bounds-of-a-mapview
 */
import * as React from "react";
import {
    StyleSheet,
    ImageStyle
} from "react-native";

const MapView = require("react-native-maps");

export interface Props {
    navigation: any;
}

export interface State {
    currentRegion: {
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number
    },
    markers: Marker[];
}

interface Marker {
    latlng: {latitude: number, longitude: number},
    title: string,
    description: string
}

// hardcoded data that will be removed.
const marker1: Marker = {
    latlng: {latitude: 58.1634301, longitude: 8.0063132},
    title: "Student Organisasjonen",
    description: "Kapasitet 31/100"
};

const marker2: Marker = {
    latlng: {latitude: 58.1644578, longitude: 8.0005553},
    title: "Hokus Pokus Barnehage",
    description: "Kapasitet 18/70"
};

const marker3: Marker = {
    latlng: {latitude: 58.1619643, longitude: 8.0013493},
    title: "Vegard Hauges Plass",
    description: "Kapasitet 55/60"
};

const marker4: Marker = {
    latlng: {latitude: 58.1625547, longitude: 8.0070819},
    title: "Spicheren",
    description: "Kapasitet 70/70"
};


// 1: 58.1634301,8.0063132, 2: 58.1644578,8.0005553 ?

const earthRadiusInKM = 6371;
// you can customize these two values based on your needs
const radiusInKM = 0.5;
const aspectRatio = 1;

export class MapScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            currentRegion: {
                // standard values used if no gps data is found, these should probably be changed...
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                marker1, marker2, marker3, marker4
            ]
        }
    }

    watchID: number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const radiusInRad = radiusInKM / earthRadiusInKM;
                const longitudeDelta = rad2deg(radiusInRad / Math.cos(deg2rad(latitude)));
                const latitudeDelta = aspectRatio * rad2deg(radiusInRad);

               // const region = calculateRegion(position);
                this.setState({currentRegion: {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta
                }});
            },
            // (error) => alert(error.message),
            // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const radiusInRad = radiusInKM / earthRadiusInKM;
            const longitudeDelta = rad2deg(radiusInRad / Math.cos(deg2rad(latitude)));
            const latitudeDelta = aspectRatio * rad2deg(radiusInRad);
            this.setState({currentRegion: {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }});
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }


    render() {
        console.log("MapView:");

        console.log(MapView);
        return (
            <MapView
                style={styles.container}
                initialRegion={this.state.currentRegion}
                showsUserLocation = {true}
            >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
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

function deg2rad (angle) {
    return angle * 0.017453292519943295 // (angle / 180) * Math.PI;
}

function rad2deg (angle) {
    return angle * 57.29577951308232 // angle / Math.PI * 180
}


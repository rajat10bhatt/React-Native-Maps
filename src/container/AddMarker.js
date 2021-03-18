import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import styles from '../styles'
import marker from '../../assets/icons8-marker.png'
import { addMarkerAction } from '../actions'

const AddMarker = (props) => {
    const [region, setRegion] = React.useState({
        latitude: -33.862512,
        longitude: 151.209490,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    onRegionChange = region => {
        setRegion(region)
    }

    const addMarkerOnPress = () => {
        props.addMarker({
            key: makeid(15),
            title: makeid(15),
            description: makeid(30),
            latLong: {
                latitude: region.latitude,
                longitude: region.longitude,
            },
        })
        props.navigation.popToTop()
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -33.862512,
                    longitude: 151.209490,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={onRegionChange}
            />
            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={marker} />
            </View>
            <TouchableOpacity
                style={styles.addLocationButton}
                onPress={() => addMarkerOnPress()}
            >
                <Text style={styles.markerTitle}>Add Marker</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    addMarker: marker => dispatch(addMarkerAction(marker))
})

export default connect(null, mapDispatchToProps)(AddMarker)
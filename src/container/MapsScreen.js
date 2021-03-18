import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import styles from '../styles'
import markerImage from '../../assets/icons8-marker.png'

const MapScreen = (props) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -33.862512,
          longitude: 151.209490,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {
          props.markers.map((marker, i) => (
            <Marker key={i} coordinate={marker.latLong}>
              <Image style={styles.marker} source={markerImage} />
            </Marker>
          ))
        }
      </MapView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => props.navigation.navigate('MarkerList', { markers: props.markers })}
      >
        <Text>Markers</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => ({
  markers: state.markers
})

export default connect(mapStateToProps)(MapScreen)
import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from '../styles'

const Item = ({ title }) => (
    <View style={styles.markerItem}>
        <Text style={styles.markerTitle}>{title}</Text>
    </View>
);

export default MarkerListScreen = ({ route, navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.markerList}
                data={route.params.markers}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate('AddMarker')}
            >
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
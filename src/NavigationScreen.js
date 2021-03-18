import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarkerListScreen from './component/MarkerListScreen'
import MapScreen from './container/MapsScreen'
import AddMarker from './container/AddMarker'

const Stack = createStackNavigator()

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
            }}>
                <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="MarkerList" component={MarkerListScreen} options={{ title: 'Markers' }} />
                <Stack.Screen name="AddMarker" component={AddMarker} options={{ title: 'Add' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen
import React from 'react'
import NavigationScreen from './src/NavigationScreen'
import { Provider } from 'react-redux'
import store from './src/store'

export default App = () => (
  <Provider store={store}>
    <NavigationScreen />
  </Provider>
)
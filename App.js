import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import Navigator from './src/config/routes'
import store from './src/config/store'

EStyleSheet.build({
  $primaryWhite: '#FFFFFF',
  $primaryBlack: '#000000'
})
export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
)

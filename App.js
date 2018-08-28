import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator from './src/config/routes'

EStyleSheet.build({
  $primaryWhite: '#FFFFFF',
  $primaryBlack: '#000000'
})
export default () => (
  <Navigator onNavigationStateChange={null} />
)

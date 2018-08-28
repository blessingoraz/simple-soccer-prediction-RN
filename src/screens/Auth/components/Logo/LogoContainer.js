import React from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const LogoContainer = ({children}) => {
  return (
    <View style={styles.loginOverlay}>
      <Image
        source={require('./images/ball.png')}
        style={styles.logoImage}
      />
      {children}
    </View>
  )
}

LogoContainer.propTypes = {
  children: PropTypes.any
}
export default LogoContainer

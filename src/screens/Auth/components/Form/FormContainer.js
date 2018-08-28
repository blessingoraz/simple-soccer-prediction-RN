import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

const FormContainer = ({children, iconName}) => {
  return (
    <View style={styles.textInputContainer}>
      <MaterialCommunityIcons name={iconName} size={30} color='white' style={{marginTop: 12}} />
      {children}
    </View>
  )
}

FormContainer.propTypes = {
  children: PropTypes.any,
  iconName: PropTypes.string
}
export default FormContainer

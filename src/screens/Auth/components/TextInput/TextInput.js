import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

const Input = ({ placeholder, onChange }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChange}
      underlineColorAndroid='transparent' />
  )
}

export default Input

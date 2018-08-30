import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export const LoginButton = ({authType, navigateToHome}) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={navigateToHome}>
            <Text style={styles.buttonText}> {authType} </Text>
          </TouchableOpacity>
    )
}

export const TextDescriptionButton = ({authDescription, toggleAuthType}) => {
    return (
        <TouchableOpacity
            onPress={toggleAuthType}>
            <Text style={styles.textDescription}> { authDescription } </Text>
          </TouchableOpacity>
    )
}
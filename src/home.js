import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home here here </Text>
        <Button
            title='Go to Login'
            onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})

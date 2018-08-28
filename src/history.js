import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class History extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Button
          title='Go to homeScreen'
          onPress={() => this.props.navigation.navigate('Home')}
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

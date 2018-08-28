import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { Animation } from './components/Animation'
import { LogoContainer } from './components/Logo'
import { FormContainer } from './components/Form'
import { Input } from './components/TextInput'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: null,
      email: null,
      password: null
    }
  }

  handleTextChange = (e) => {
    console.log('get here')
  }

  render () {
    return (
      <Animation>
        <LogoContainer>
          <FormContainer iconName='account-outline'>
            <Input onChange={this.handleTextChange}/>
          </FormContainer>

          <FormContainer iconName='lock-outline'>
            <Input onChange={this.handleTextChange}/>
          </FormContainer>

          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}> LOGIN </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={{color: '#dddddd', fontSize: 16, marginTop: 35, textAlign: 'center'}}> No account yet? Create One </Text>
          </TouchableOpacity>
        </LogoContainer>
      </Animation>
    )
  }
};

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: '#E4B13F',
    borderWidth: 1,
    borderColor: '#E4B13F',
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 20,
    borderBottomWidth: 0,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2,
    height: 45
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    justifyContent: 'center',
    textAlign: 'center'
  }
})

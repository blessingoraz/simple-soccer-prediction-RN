import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Animation } from './components/Animation'
import { LogoContainer } from './components/Logo'
import { FormContainer } from './components/Form'
import { Input } from './components/TextInput'
import { LoginButton, TextDescriptionButton } from './components/Button'

import CONSTANTS from './constants'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      authType: CONSTANTS.AUTH_TYPE_LOGIN,
      authDescription: CONSTANTS.AUTH_DESCRIPTION_SIGNIN
    }
  }

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string
  }

  handleTextChange = (text) => {
    console.log('get here', text)
  }

  toggleAuthType = () => {
    const { authType } = this.state
    if (authType === CONSTANTS.AUTH_TYPE_LOGIN) {
      this.setState({
        authType: CONSTANTS.AUTH_TYPE_SIGNIN,
        authDescription: CONSTANTS.AUTH_DESCRIPTION_LOGIN
      })
    } else {
      this.setState({
        authType: CONSTANTS.AUTH_TYPE_LOGIN,
        authDescription: CONSTANTS.AUTH_DESCRIPTION_SIGNIN
      })
    }
  }

  handleNavigateToHome = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    const { authType, authDescription } = this.state
    return (
      <Animation>
        <LogoContainer>
          { authType === 'SIGNIN' &&
            <FormContainer iconName='email-outline'>
              <Input onChange={this.handleTextChange}/>
            </FormContainer>
          }
          <FormContainer iconName='account-outline'>
            <Input onChange={this.handleTextChange}/>
          </FormContainer>

          <FormContainer iconName='lock-outline'>
            <Input onChange={this.handleTextChange}/>
          </FormContainer>

          <LoginButton
            navigateToHome={this.handleNavigateToHome}
            authType={authType}
          />
  
          <TextDescriptionButton
            toggleAuthType={this.toggleAuthType}
            authDescription={authDescription}
          />
        </LogoContainer>
      </Animation>
    )
  }
};

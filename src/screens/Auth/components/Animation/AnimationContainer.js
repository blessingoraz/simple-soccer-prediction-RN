import React, { Component } from 'react'
import { Dimensions, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const SCREEN_WIDTH = Dimensions.get('window').width

class AnimationContainer extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue, {
        toValue: 1,
        duration: 90000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render () {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -SCREEN_WIDTH]
    })
    return (
      <Animated.View style={styles.container}>
        <Animated.Image
          source={require('./images/backgroundImage.jpg')}
          style={[styles.backgroundImageContainer, { marginLeft }]}
        />
        {this.props.children}
      </Animated.View>
    )
  }
}

AnimationContainer.propTypes = {
  children: PropTypes.any
}
export default AnimationContainer

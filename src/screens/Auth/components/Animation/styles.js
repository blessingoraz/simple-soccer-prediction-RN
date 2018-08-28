import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    opacity: 0.4,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH * 2
  }
})

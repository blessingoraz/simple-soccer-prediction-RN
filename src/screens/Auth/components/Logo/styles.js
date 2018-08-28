import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default EStyleSheet.create({
  loginOverlay: {
    backgroundColor: '#137a15',
    opacity: 0.8,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    height: 50,
    width: 50
  }
})

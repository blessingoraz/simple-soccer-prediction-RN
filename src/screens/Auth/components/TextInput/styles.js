import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const SCREEN_WIDTH = Dimensions.get('window').width

export default EStyleSheet.create({
  textInput: {
    height: 40,
    width: SCREEN_WIDTH / 1.3,
    borderColor: 'white',
    borderBottomWidth: 1
  }
})

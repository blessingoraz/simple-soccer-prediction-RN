import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
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
      },
      textDescription: {
        color: '#dddddd',
        fontSize: 16,
        marginTop: 35,
        textAlign: 'center'
      }
})

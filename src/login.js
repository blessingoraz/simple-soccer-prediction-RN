import React, { Component } from 'react'
import { 
  Text, 
  TextInput,
  View, 
  StyleSheet, 
  Button,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Login extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.state = { 
            username: null,
            email: null,
            password: null
        };
    }

    componentDidMount () {
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue, {
                toValue: 1,
                duration: 90000,
                easing: Easing.linear
            }
        ).start(() => this.animate());
    }

    render() {
        marginLeft = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -SCREEN_WIDTH]
        });
        console.log('marginLeft ===', marginLeft);

        return (
                <Animated.View style={styles.container}>
                    <Animated.Image
                        source={require('../assets/backgroundImage.jpg')}
                        style={[styles.backgroundImageContainer, { marginLeft, height: SCREEN_HEIGHT, width: SCREEN_WIDTH * 2 }]}
                    />

                    <Animated.View style={styles.loginOverlay}>   
                        <Animated.Image
                            source={require('../assets/ball.png')}
                            style={{height: 50, width: 50}}
                        />
                        <View style={{marginTop: 10}}>
                            <View style={styles.textInputContainer}>
                                <MaterialCommunityIcons name="account-outline" size={30} color="white" style={{marginTop: 12}}/>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.username}
                                    underlineColorAndroid = "transparent"/>
                                <TextInput/>
                            </View>

                            <View style={styles.textInputContainer}>
                                <MaterialCommunityIcons name="lock-outline" size={30} color="white" style={{marginTop: 12}} />
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.email}
                                    underlineColorAndroid = "transparent"
                                    secureTextEntry={true}/>
                                <TextInput/>
                            </View>

                            <TouchableOpacity style={styles.button}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={styles.buttonText}> LOGIN </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Text style={{color: '#dddddd', fontSize: 16, marginTop: 35, textAlign: 'center'}}> No account yet? Create One </Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
            </Animated.View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginOverlay: {
        backgroundColor: '#137a15',
        opacity: 0.8,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    text: {
        color: 'white'        
    },
    textInput: {
        height: 40, 
        width: SCREEN_WIDTH/1.3, 
        borderColor: 'white', 
        borderBottomWidth: 1
    },
    backgroundImageContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        opacity: 0.4
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
        height: 45,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        justifyContent: 'center',
        textAlign: 'center'
    }
});
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, Picker } from 'react-native'

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerTitleStyle: {
            color: '#444',
            fontWeight: 'normal'
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center', marginTop: 50, fontSize: 20, color: '#137a15', fontWeight: '600'}}>UEFA Soccer Prediction</Text> 
                </View> 

                <View style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
                        <Image 
                            source={require('../assets/arsenal.jpg')}
                            style={{height: 110, width: 110}}
                        />
                        <Text style={{marginTop: 20, fontWeight: '600',fontSize: 20, color: '#a3a3a3' }}>ARSENAL</Text>

                        <Picker
                            // selectedValue={this.state.language}
                            style={{ height: 50, width: 150,  }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Chelsea" value="chelsea" />
                            <Picker.Item label="ManUnited" value="manunited" />
                        </Picker>

                        <Text style={{color: '#113572', fontWeight: '700', fontSize: 52}}> 4 </Text>
                    </View>

                    <View style={{backgroundColor: '#E4B13F', width: 5}}>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
                        <Image 
                            source={require('../assets/chelsea.png')}
                            style={{height: 110, width: 110}}
                        />
                        <Text style={{marginTop: 20, fontWeight: '600',fontSize: 20, color: '#a3a3a3' }}>CHELSEA</Text>

                        <Picker
                            // selectedValue={this.state.language}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Chelsea" value="chelsea" />
                            <Picker.Item label="ManUnited" value="manunited" />
                        </Picker>

                         <Text style={{color: '#113572', fontWeight: '700', fontSize: 52}}> 0 </Text>
                    </View>
                </View>

                <View style={{flex: 2}}>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        marginTop: 40
    }
})

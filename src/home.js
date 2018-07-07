import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    Picker,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { Card } from 'react-native-elements'
import TeamInfo from './teamInfo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Home extends Component {
    state = {
        selectedTeam1: 1,
        selectedTeam2: 2
    };

    static navigationOptions = {
        headerTitle: 'Home',
        headerTitleStyle: {
            color: '#444',
            fontWeight: 'normal'
        }
    }
    render() {
        const { selectedTeam1, selectedTeam2 } = this.state;
        const teamObj1 = TeamInfo.filter((team) => selectedTeam1 === team.id);
        const teamObj2 = TeamInfo.filter((team) => selectedTeam2 === team.id);

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center', marginTop: 40, fontSize: 20, color: '#137a15', fontWeight: '600'}}>UEFA Soccer Prediction</Text> 
                </View> 

                <View style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
                        <Card>
                            <Image 
                                source={teamObj1[0].imagePath}
                                style={{height: 110, width: 110}}
                            />
                        </Card>
                        <Text style={{marginTop: 20, fontWeight: '600',fontSize: 20, color: '#a3a3a3' }}>{teamObj1[0].name}</Text>

                        <Text style={{color: '#113572', fontWeight: '700', fontSize: 52}}> 4 </Text>
                        <Picker
                            selectedValue={teamObj1[0].name}
                            style={{ height: 20, width: 150 }}
                            onValueChange={(itemValue) => this.setState({selectedTeam1: itemValue})}>
                            <Picker.Item label="Select Team"/>

                            { TeamInfo.map((team, index) => {
                                return (
                                    <Picker.Item 
                                        label={team.name} 
                                        value={team.id} 
                                        key={index}/>
                                )
                            })}

                        </Picker>
                    </View>

                    <View style={{backgroundColor: '#E4B13F', width: 5, height: 0.5 * SCREEN_HEIGHT}}>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
                        <Card>
                            <Image 
                                source={teamObj2[0].imagePath}
                                style={{height: 110, width: 110}}
                            />
                        </Card>
                        <Text style={{marginTop: 20, fontWeight: '600',fontSize: 20, color: '#a3a3a3' }}>{teamObj2[0].name}</Text>
                        <Text style={{color: '#113572', fontWeight: '700', fontSize: 52}}> 0 </Text>
                        
                        <Picker
                            selectedValue={teamObj2[0].name}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => this.setState({selectedTeam2: itemValue})}>
                            <Picker.Item label="Select Team"/>

                            { TeamInfo.map((team, index) => {
                                return (
                                    <Picker.Item 
                                        label={team.name} 
                                        value={team.id} 
                                        key={index}/>
                                )
                            })}
                        </Picker>
                    </View>
                </View>

                <View style={{position: 'absolute', top: SCREEN_HEIGHT - 200, left: SCREEN_WIDTH - 240}}>
                    <TouchableHighlight  
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#137a15',
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            borderWidth: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.8,
                            shadowRadius: 10,
                            elevation: 10, 
                            borderColor:'rgba(0,0,0,0.2)',
                    }} onPress={() => console.log('ffdfdfd me')}>
                        <Text style={{textAlign: 'center', justifyContent: 'center', color: 'white', fontSize: 22, fontWeight: '600'}}>Predict</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        // marginTop: 40,
        // marginBottom: 20
    }
})

import React from 'react';
import { Text, View } from 'react-native';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={{
                marginTop: 0,
                backgroundColor: '#fff',
                flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center' 

            }}>
                <Text style={{
                    fontSize: 15,
                    color: '#444f4c',
                    textAlign: 'center',
                    padding: 5,
                    
                }}>
                    {this.props.headtitle}
                </Text>
            </View>
        );
    }
}
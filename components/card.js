import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from './components/header';


export default class Card extends React.Component {
  render() {   

    return (      
        <View style={{ borderColor: 'gray', borderWidth: 0.5 }}>
          <Image style={{ height: 250 }}
            source={this.props.img} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, color: '#a3882e' }}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

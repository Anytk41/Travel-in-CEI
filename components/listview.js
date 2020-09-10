import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from './components/header';


export default class ListView extends React.Component {
  render() {
    //let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (

        <View style={{flex:1, flexDirection:'row',marginBottom:2}}>
          <View style={{flex:1}}>
              <Image source={this.props.img} style={{height:100}}/>
          </View>
          <View style={{flex:2, paddingLeft:5}}>
              <Text>{this.props.title}</Text>
              <Text>{this.props.desc}</Text>
          </View>
        </View>

    );
  }
}



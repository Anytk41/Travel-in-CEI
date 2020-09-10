import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View,Drawer,Button,WebView } from 'react-native';
import HeaderBar from '../components/header';


export default class LocationScreen extends React.Component {
  static navigationOptions =
   {
    title: 'Location'
  
  };

  render() {
    return (
      <ScrollView>
        
        <HeaderBar headtitle='Map'  />
        <WebView
        source={{uri: 'https://www.google.co.th/maps/@18.3170581,99.3986862,17z?hl=th'}}
        style={{marginTop: 0,height:500}}
        />
      
      </ScrollView>
    );
  }
}

import React from 'react';
import {Platform,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight, ScrollView, Image, StyleSheet, Text, View,Drawer,Button} from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
export default class ListRestScreen extends React.Component {
  static navigationOptions =
   {
    title: 'RESTAURANT'
  
  };


  render() {
       
   
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>PARABOLA CAFE</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF1')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>THE WANDERER CAFE & RESTAURANT</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF2')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>DE LANNA RIVERFRONT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF3')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>RYOKAN CAFE</Text>
          </View>
        </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF4')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>KAHAWA CAFE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('CF5')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>PHU LAE</Text>
        </View>
      </TouchableOpacity>

    </View>
    </ScrollView>
    );
  }
}

                
     const styles = StyleSheet.create({
      container: {
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: '#c4c9d7',
      },
      button: {
        marginBottom: 30,
        borderRadius:30,
        width: 300,
        height:100,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30,
        borderRadius:30,
        alignItems: 'center',
        backgroundColor: '#444f4c'
      },
      buttonText: {
        padding: 20,
        color: 'white',
        fontSize:15,
      }
    });
  


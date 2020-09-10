import React from 'react';
import {Platform,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight, ScrollView, Image, StyleSheet, Text, View,Drawer,Button} from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
export default class ListMountainScreen extends React.Component {
  static navigationOptions =
   {
    title: 'Mountain'
  
  };


  render() {
       
   
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>PHU CHI FA</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT1')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>DOI TUNG </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT2')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>DOI MAE SALONG</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT3')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>DOI PHA TANG</Text>
          </View>
        </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT4')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>DOI HUA MAE KHAM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('MT5')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>DOI WAWEE</Text>
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
  


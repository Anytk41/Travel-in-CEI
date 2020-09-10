import React from 'react';
import {Platform,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight, ScrollView, Image, StyleSheet, Text, View,Drawer,Button} from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
import ListView from '../components/listview';

export default class ListTempleScreen extends React.Component {
  static navigationOptions =
   {
    title: 'Temple'
  };
  
  render() {
       
   
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Wat')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wat RONG KHUN</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Wat1')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wat PHRA KAEW </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Wat2')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wat HUAY PLA KANG</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Wat3')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wat Phra Dhat Pha-Ngao</Text>
          </View>
        </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Wat4')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Wat Ming Mueang </Text>
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
  


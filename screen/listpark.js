import React from 'react';
import {Platform,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight, ScrollView, Image, StyleSheet, Text, View,Drawer,Button} from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
export default class ListPackScreen extends React.Component {
  static navigationOptions =
   {
    title: 'PARK&MUSEUM'
  
  };


  render() {
       
   
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>BAN DAM,THAWAL INDEX DISTRICT</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM1')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>KHUA ART(ART BRIDGE)&LET'S TRY</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM2')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>MAE FAH LUANG ART AND CULTURE PARK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM3')} 
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>HILL TRIBE MUSEU</Text>
          </View>
        </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM4')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>OUB KHAM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('PM5')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>9 ART GALLERY</Text>
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
  


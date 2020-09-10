import React from 'react';
import {ScrollView, Image, StyleSheet, Text, View,Drawer,Button} from 'react-native';

import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';

export default class MainMenuScreen extends React.Component {
  static navigationOptions =
   {
    title: 'Main menu'
  };
// constructor(props){
//   super(props)
//   this.state = {data: [], loading: false}
// }
//   //https://reactproject-ab869.firebaseio.com/mydata.json
//   loadData = async() =>{
//     const res = 
//     await fetch('https://reactproject-ab869.firebaseio.com/mydata.json')

//     const netdata = await res.json()
//     this.setState({data:netdata})
//   }
//   async componentDidMount(){
//     await this.loadData()
//   }

  render() 
  {
       
    return (
      <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Listtemple')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TEMPLE</Text>
        </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('ListMountain')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>MOUNTAIN</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('ListPark')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>PARK&MUSEUM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('ListRest')} 
      underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>RESTAURANT</Text>
        </View>
      </TouchableOpacity>
    
    <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Location')} 
    underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>LOCATION</Text>
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
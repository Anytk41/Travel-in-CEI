import React from 'react';
import { ScrollView,Text, View} from 'react-native';



export default class Bigboss extends React.Component {
  static navigationOptions = {
    title: 'View Comment',
  }
  render() {
    <View style = {{backgroundColor: '#c4c9d7'}}></View>

       return (
        <View style = {{backgroundColor: '#c4c9d7'}}>

         <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: '#c4c9d7',marginBottom:5}}>
            
            <View style = {{flex:2}}>
            <Text style = {{color:'#a3882e',fontSize : 18 , fontWeight : 'bold'}}>Comment: {this.props.name} </Text>
            {/* <Text style={{color:'white',fontSize:14}}>{this.props.name}</Text> */}
            </View> 
         
         </View>
        </View>
       );
    }
  }
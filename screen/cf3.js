import React from 'react';
import { ImageBackground, AppRegistry, TextInput, ScrollView, Image, StyleSheet, Text, View,FlatList} from 'react-native';
import HeaderBar from '../components/header';
//import Card from '../components/card'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native';
import * as firebase from 'firebase'

export default class CF3Screen extends React.Component {
  static navigationOptions = {
    title: 'RYOKAN CAFE',
  }
  state={
    item:[]
  }
constructor(props){
  super(props)
  this.state = {name : '',address : '',info : '',Time : ''}
}

  componentDidMount(){
    firebase.database().ref('rc').on('value', snap =>{
      var data = snap.val()
      var item = Object.values(data)
      this.setState({data:item})
    })
    firebase.database().ref('Rcc').on('value', snap =>{
      var data = snap.val()
      var item = Object.values(data)
      this.setState({comment:item})
    })
    
  }

  submitOrder(){
  
    let data = {
      name : this.state.name, 
    }

 firebase.database().ref('Rcc').push(data).then(()=>{
   alert('Comment successful ! ')
   this.setState({name:''})
 }) 
}
renderbutton(){
 
 
  if(this.state.name.trim() !== ''){
    return(
      <TouchableOpacity
        onPress={() => this.submitOrder()}>
          <Text style={{    
                    fontSize: 14,                
                    padding: 20,
                    color: '#f2f2f7'                    
                }}>
                   Send
          </Text>         
      </TouchableOpacity> 
    )
  }else{
    return (
      <FlatList
      data={this.state.data}
      renderItem={({item}) => 
      <View style={styles.container}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Image source={{uri:item.image}} style={{width:300,height:250}}/></View>
          <View style={{flex:1, alignItems:'left', justifyContent:'letf'}}>
          <Text>Name:{item.name}</Text>
          <Text>    {item.info}</Text>
          <Text>Address:{item.address}</Text>
          <Text>Time:{item.Time}</Text>
        </View>
        </View>
    }
      />
    )
  }
}
  render() {
    return (
      <ScrollView style = {{backgroundColor: '#c4c9d7'}}>   
       <View>
         {this.renderbutton()}
       </View>
       <TextInput style={{
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            color: '#f2f2f7'
          }}
            onChangeText={(text) => this.setState({name : text})}
            clearButtonMode='always'
            placeholder = 'Comment'
          />   
        <FlatList
        data={this.state.comment}
        renderItem={({item}) => 
        
        <View style = {{backgroundColor: '#c4c9d7'}}>  
        <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: '#c4c9d7',marginBottom:5}}>
           <View style = {{flex:2}}>
           <Text style = {{color:'#a3882e',fontSize : 18 , fontWeight : 'bold'}}>Comment: {item.name} </Text>
           {/* <Text style={{color:'white',fontSize:14}}>{this.props.name}</Text> */}
           </View> 
        </View>
       </View>
        }
        />
    </ScrollView>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c9d7"
  }
});
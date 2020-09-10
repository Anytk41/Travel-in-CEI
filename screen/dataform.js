import React from 'react';
import { Text, View} from 'react-native';

export default class DataFormScreen extends React.Component {
    
  render() {

       return (
       
         <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'Green',marginBottom:5}}>
            
            <View style = {{flex:2}}>
            {<Text style = {{fontSize : 28 , fontWeight : 'bold'}}>Correct Reserve: {this.props.name} </Text> }
            <Text style={{color:'green',fontSize : 28}}>Table number : {this.props.table}</Text>
            <Text style={{fontSize:14}}>{this.props.tel}</Text>
            </View> 
         
         </View>
        
       );
    }
  }
// import React from 'react';
// import {Linking,WebView,Share,TextInput,Button,ScrollView,Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from '../components/header';
// import Card from '../components/card'
// import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';


// export default class DataFormScreen extends React.Component {
//     constructor(props){
//         super(props)
//         const {id,name,time,picture,info,address} = this.props.navigation.state.params;
        
//         this.state = {data:[],dataid:""+id,dataname:name}
//     }
//     loadData = async() =>{
//         const res = 
//         await fetch('https://chiangrai-aab81.firebaseio.com/mydata.json')
    
//         const netdata = await res.json()
//         console.log(netdata)
//         const array = Object.values(netdata);
//         console.log(array)
//         this.setState({data:netdata})
//       }
//       async componentDidMount(){
//         await this.loadData()
//       }

//       //code for submit button
//         submitdata = async() =>{
//         let mydata={
//             id: this.state.dataid,
//             name: this.state.dataname
//         }
//         let url = 'https://chiangrai-aab81.firebaseio.com/mydata/1.json'
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(mydata)
//         });
//         await this.loadData()
//     }
//     //code for share
//     onShare = async () => {
//         try {
//           const result = await Share.share({
//             message:
//               'React Native | A framework for building native apps using React',
//           });
    
//           if (result.action === Share.sharedAction) {
//             if (result.activityType) {
//               // shared with activity type of result.activityType
//             } else {
//               // shared
//             }
//           } else if (result.action === Share.dismissedAction) {
//             // dismissed
//           }
//         } catch (error) {
//           alert(error.message);
//         }
//       };

      
//     render() {
//         return (
//             <ScrollView>
//               <View style={{padding:10}}>
      
//                 <Text style={{fontSize:30}}>ID : </Text>
//                 <TextInput onChangeText={(id) => this.setState({datatid:id})} 
//                 style={{fontSize:20}} 
//                 value={this.state.dataid}></TextInput>
      
//                 <Text style={{fontSize:30}}>Title : </Text>
//                 <TextInput onChangeText={(title) => this.setState({dataname:name})}
//                 style={{fontSize:20}} 
//                 value={this.state.dataname}></TextInput>
      
//                 <Button onPress={() => this.submitdata()}
//                 title='LLL'/>
         
//               <FlatList
//                 data={this.state.data}
//                 renderItem={({item}) => 
//                 <Text>{item.id} | {item.name}</Text>}
//               />
              
//               </View>
//             </ScrollView>
//           );
//         }
//       }
      
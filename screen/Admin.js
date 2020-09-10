import React from 'react';
// import { ImageBackground, TextInput, ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList , ScrollView , View , TouchableOpacity,Text, } from 'react-native';
import firebase from 'firebase'
import Bigboss from './../components/bigboss'



export default class Admin extends React.Component {  
 
  
  componentDidMount(){

    firebase.database().ref('Table').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items})
    
   }),
   firebase.database().ref('Wpkc').on('value', (snapshot)=>{
    let data = snapshot.val()
    let items = Object.values(data)
      this.setState({data : items}) 
    }),
    firebase.database().ref('Whpkc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Wppc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Wpdpnc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Wmmc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Pcfc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dtc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dmsc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dptc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dhmkc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dwc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Bdc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Kac').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Htc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Okc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Agc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Pacc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Wcrc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Dlrc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    }),
    firebase.database().ref('Rcc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    })
    ,
    firebase.database().ref('Kcc').on('value', (snapshot)=>{
      let data = snapshot.val()
      let items = Object.values(data)
        this.setState({data : items}) 
    })
}

   
   constructor(props){
     super(props)
     this.state = ({data : []})
   }

   delete(item){
     firebase.database().ref('Table').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
       firebase.database().ref('Table').child(snapshot.key).remove()
     }),
     firebase.database().ref('Wpkc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Wpkc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Whpkc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Whpkc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Wppc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Wppc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Wpdpnc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Wpdpnc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Wmmc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Wmmc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Pcfc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Pcfc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Dtc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dtc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Dmsc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dmsc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Dptc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dptc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Dhmkc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dhmkc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Dwc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dwc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Bdc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Bdc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Kac').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Kac').child(snapshot.key).remove()
    }),
    firebase.database().ref('Mfuc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Mfuc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Htc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Htc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Okc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Okc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Agc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Agc').child(snapshot.key).remove()
    }) ,
    firebase.database().ref('Pacc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Pacc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Wcrc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Wcrc').child(snapshot.key).remove()
    })
    ,
    firebase.database().ref('Dlrc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Dlrc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Rcc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Rcc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Kcc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Kcc').child(snapshot.key).remove()
    }),
    firebase.database().ref('Plc').orderByChild('name').equalTo(item.name).on('child_added',(snapshot)=>{
      firebase.database().ref('Plc').child(snapshot.key).remove()
    })
   }

   callupdate(item){
     this.props.navigation.navigate('Update',{item : item})
   }
 
  render() {    
    return (
      <ScrollView style = {{backgroundColor: 'rgba(30,30,28,20)' }}>


  
    </ScrollView>
     
     
    )
  }
}
import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase'
import mydata from './data/mydata';
import LoginScreen from './screen/loginform';
import MainmenuScreen from './screen/mainmenu';
import RegisterScreen from './screen/registerform';
import ListtempleScreen from './screen/listtemple';
import LoginAdminScreen from './screen/loginadmin';
import LocationScreen from './screen/location';
import ListMountainScreen from './screen/listmountain';
import ListParkScreen from './screen/listpark';
import ListRestScreen from './screen/listrest';
import Wat1Screen from './screen/wat1';
import Admin from './screen/Admin';
import WatScreen from './screen/Wat';
import Wat2Screen from './screen/wat2';
import Wat3Screen from './screen/wat3';
import Wat4Screen from './screen/wat4';
import MTScreen from './screen/mt';
import MT1Screen from './screen/mt1';
import MT2Screen from './screen/mt2';
import MT3Screen from './screen/mt3';
import MT4Screen from './screen/mt4';
import MT5Screen from './screen/mt5';
import PMScreen from './screen/pm';
import PM1Screen from './screen/pm1';
import PM2Screen from './screen/pm2';
import PM3Screen from './screen/pm3';
import PM4Screen from './screen/pm4';
import PM5Screen from './screen/pm5';
import CFScreen from './screen/cf';
import CF1Screen from './screen/cf1';
import CF2Screen from './screen/cf2';
import CF3Screen from './screen/cf3';
import CF4Screen from './screen/cf4';
import CF5Screen from './screen/cf5';
const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register : RegisterScreen,
    Mainmenu: MainmenuScreen,
    Listtemple : ListtempleScreen,
    LoginAdmin: LoginAdminScreen ,
    Location: LocationScreen,
    ListMountain: ListMountainScreen,
    ListPark: ListParkScreen,
    ListRest:ListRestScreen,
    Wat1 : Wat1Screen,
    Wat : WatScreen,
    Admin : Admin,
    Wat2 : Wat2Screen,
    Wat3 : Wat3Screen,
    Wat4 : Wat4Screen,
    MT : MTScreen,
    MT1 : MT1Screen,
    MT2 : MT2Screen,
    MT3 : MT3Screen,
    MT4 : MT4Screen,
    MT5 : MT5Screen,
    PM : PMScreen,
    PM1 : PM1Screen,
    PM2 : PM2Screen,
    PM3 : PM3Screen,
    PM4 : PM4Screen,
    PM5 : PM5Screen,
    CF : CFScreen,
    CF1 : CF1Screen,
    CF2 : CF2Screen,
    CF3 : CF3Screen,
    CF4 : CF4Screen,
    CF5 : CF5Screen,
  })
  const Loginnavigator = createStackNavigator({
    Login : {screen : LoginScreen},
    LoginAdmin:{screen:LoginAdminScreen},
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00b5ec",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
    
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentWillMount(){
  var config = {
    apiKey: "AIzaSyD0lq0q6lzVlezvyqzyrL4vDNZkOT-nZzI ",
    authDomain: "chiangrai-aab81.firebaseapp.com",
    databaseURL: "https://chiangrai-aab81.firebaseio.com",
    projectId: "chiangrai-aab81",
    storageBucket: "chiangrai-aab81.appspot.com",
    messagingSenderId: "513860726258",
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <AppContainer />    
    );
  }
}



import React, { Component } from 'react';
import {TouchableHighlight, ScrollView,AppRegistry,KeyboardAvoidingView,StyleSheet,Text, View, TextInput, Button, TouchableOpacity, Image, Alert,ActivityIndicator} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  
  constructor(props){
    super(props)
    this.state = {email : '',password : '',error : '',loading:false}
}
static navigationOptions = {
  title: 'Travel in Chiang Rai',
}
onButtonPress() {
  this.setState({ error: '', loading: true })
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch((error) => {
      
          let errorCode = error.code
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            this.onLoginFailure.bind(this)('Weak password!')
          } else {
            this.onLoginFailure.bind(this)(errorMessage)
          }
        });
    
} 
onLoginSuccess() {
  this.props.navigation.navigate('Mainmenu',{emailx : this.state.email})
  this.setState({
    email: '', password: '', error: '', loading: false
  })
}
onLoginFailure(errorMessage) {
  this.setState({ error: errorMessage, loading: false })
}
renderButton() {
  if (this.state.loading) {
    return(
        <View >
           <ActivityIndicator size={"small"} />
        </View>
    );
  }
}
  render() 
  {
    return (
      <View style={styles.container}>
      <View behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{uri: 'https://image.flaticon.com/icons/png/512/167/167725.png'}}/>
          </View>
            
        <KeyboardAvoidingView style={styles.keyboard}>
          <View style={styles.window}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.window}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />


          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => this.props.navigation.navigate("Register")}
        >  Register  </Text>
      </TouchableOpacity>
     
      {/* <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => this.props.navigation.navigate("LoginAdmin")}   
        > Admin </Text>
      </TouchableOpacity> */}
    </View>
    <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => this.props.navigation.navigate("Mainmenu")}
        >  Guest  </Text>
      </TouchableOpacity>

    {this.renderButton()}
    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>
           {this.state.error}
         </Text>
         </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c9d7"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#444f4c",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
import React from 'react'
import { AppRegistry,KeyboardAvoidingView,StyleSheet,Text, View, TextInput, Button, TouchableHighlight, Image } from 'react-native'
import { StackNavigator } from "react-navigation";
import firebase from 'firebase'
export default class RegisterScreens extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { email: "",name: "",password: "",password_confirmation: ""
    };
  }
  static navigationOptions = {
    title: 'Register',
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#444f4c",
      elevation: null
    }
  };
  onButtonPress() {
    const {email , password} = this.state
        this.setState({loading:true})
       firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>this.props.navigation.goBack())
       .catch((error)=>{
        let errorCode = error.code
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          this.onLoginFailure.bind(this)('Weak password!')
        } else {
          this.onLoginFailure.bind(this)(errorMessage)
        }
        
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
      <View  style={styles.container}>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
       
       <TouchableHighlight style={[styles.buttonContainer,styles.button]} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#c4c9d7",
    padding: 20,
    paddingTop: 100
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "#444f4c",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});
AppRegistry.registerComponent("Register", () => Register);
    
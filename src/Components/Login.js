import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";



 
export default function Login() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const correctCredentials ={
    Enteredemail:"pvgkumar2001@gmail.com",
    Enteredpassword:'ganesh123'
  }

  const loginHandler = ()=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( !email || email.length==''){alert("Email cannot be empty")}
    if( !password || password == '') {alert("Password cannot be empty")}
    if(reg.test(email)==false){
        alert("Please follow correct email pattern")
    }

    if(correctCredentials.Enteredemail==email && correctCredentials.Enteredpassword==password){
      alert("Correct Credentials good to go")
    }
    setSignUp(false);
    clearInput();
  }

  const SignupHandler = ()=>{
      setSignUp(!signUp);
  }

  const clearInput = ()=>{
    setEmail('');
    setPassword('');
  }
 
  return (
    <View style={styles.container}> 
        <Text style={styles.todo}>To Do App</Text>
        <Text style={styles.todo}>{signUp ? 'SignUp':'Log-In'}</Text>
        {signUp && <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Name"
                placeholderTextColor="#003f5c"
                value={name}
                onChangeText={(email) => setName(email)}
                />
            
            </View> }

            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={(email) => setEmail(email)}
                />
            </View>
 
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder= "Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => setPassword(password)}
                />
                {/* {secure &&
                    <Icon 
                        name={secure ? "eye" : 'eye-slash'}
                        size={10} color='gray' 
                        onPress={() => setSecure(!secure)} />} */}
            </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>{!signUp?'Forgot Password?':''}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn}
                        onPress={loginHandler}>
        <Text style={styles.loginText}
                >{signUp?'Sign Up':'LOGIN'}</Text>
      </TouchableOpacity>
      <View style={styles.formcontrol}>
          <Text style={styles.acct}>{!signUp? "Don't have Account?":"Aldready have an Acoount"} </Text>
          <TouchableHighlight>
            <Text title="signup here"
                    style={styles.btnSignUp}
                    onPress={SignupHandler}
                >{signUp?"Login":"SignUp here"}</Text> 
           </TouchableHighlight>
       </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
    todo:{
        fontSize:50,
        marginBottom:40,
        color:'black'
    },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#CCC",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignContent:'center'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'black'
  },
 
  Btn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8E0082"
  },
  btnSignUp:{
    marginLeft:10,
    color: '#FF1493'
  },
  formcontrol:{
   display:'flex',
   flexDirection:'row',
   padding:20,
  },
  acct:{
    color:'black'
  },
  loginText:{
    fontWeight:'bold'
  }

});
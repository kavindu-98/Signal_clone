import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() =>  {
   const unsub = auth.onAuthStateChanged((authUser) => {
      
       console.log(authUser);
        if (authUser) {
          navigation.replace("Home");
        }
      });
      return unsub;
    }, []);

      const signIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error) => alert(error));
      };

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <StatusBar style= "light"/> 
      <Image 
      source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
      }} 
      style={{ width : 150, height:150}}
      />
      <View style={styles.inputContainer}> 
        <Input 
        placeholder='Email' 
        autoFocus 
        type="email"
        value={email}
        onChangeText={(text) => setEmail(text)} 
        />
        <Input 
        placeholder='Password' 
        secureTextEntry 
        type="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={signIn}
        />
      </View>
      <Button 
        containerStyle={styles.Button} 
        onPress={signIn} 
        title="Login"/>
      <Button 
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.Button} 
        type="outline" 
        title="Register"/>
        
      <View style={{ height: 100}} />
       
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
    inputContainer: {
      width: 300,
    },
    Button: {
      width: 200,
      marginTop: 10,
    },
});
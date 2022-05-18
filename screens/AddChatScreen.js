import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {

    const[input , setInput] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",
        });

    }, [navigation]);

    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input,
        })
        .then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));
    };

  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter a chat name' 
        value={input}
        onChangeText={(text) => setInput(text)} 
        onSubmitEditing={createChat}
        leftIcon= {
            <Icon name='wechat' type="antdesign" size={24} color="black"  />
        }
        />
         <Button 
        // containerStyle={styles.Button} 
        disabled={!input}
        onPress={createChat} 
        title="Create new Chat"/>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
    container: {
      
        // alignItems: "center",
        // justifyContent: "center",
        padding: 30,
        backgroundColor: "white",
        height: "100%",
      },
});
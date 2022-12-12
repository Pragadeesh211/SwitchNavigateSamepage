import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const[tab,settab]=useState(false);

  const payment=()=>
  {
    settab(false);
  }


  return (
    <View style={styles.container}>
      
      <Text>Welcome to Payments and Settlement</Text>
      <View style={styles.tabnavigate}>
        <Pressable 
         onPress={payment}
        style={{flex:1,
          borderWidth:1,
          marginTop:40,
          marginBottom:20,
          height:40,
          alignItems:"center",
          justifyContent:"center",
          backgroundColor: tab?"white":"purple"
        
        }}>
          <Text style={{color:tab?"black":"white"}}>Payments
          </Text>
        </Pressable>
        <Pressable 
        onPress={() =>{settab(true)}}
        style={{flex:1,
        borderWidth:1,
        marginTop:40,
        marginBottom:20,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: tab?"purple":"white"}} >
          <Text style={{color:tab?"white":"black"}}>
            Settlement
          </Text>
        </Pressable>

      </View>
      <View>
        {tab ? (<View><Text>No Settlements are done</Text></View>):(<View><Text>Payments are done</Text></View>)}
        </View>
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ef:{
    flex:6
  },
  tabnavigate:{
    flexDirection: "row"
   }
  
});




import React from "react";
import { View } from "react-native";

export default function Payments(){
    return(
        <View>
            <Text>One Payments are done</Text>
        </View>
    );
}





import React from "react";
import { View,Text } from "react-native";

export default function Settlements(){
    return(
        <View>
            <Text>No history of Settlement </Text>
        </View>

    );
}

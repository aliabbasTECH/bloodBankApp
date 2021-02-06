import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import database from '@react-native-firebase/database';


function Home(props) {
  




     return (
         
          <View style={styles.container}> 
                 
                 <Image  style={styles.Image} source={require('../assets/img1.png')} />
                <TouchableOpacity style={styles.signbtn} onPress={()=> props.navigation.navigate("Register")}>
                    <Text style={{fontSize:30}} >Donate</Text>
                </TouchableOpacity>

                

                
          </View>
        
      
     );
   };
 
 
 export default Home;
 
 
   const styles = StyleSheet.create({
     container: {
       backgroundColor: "white",
       flex:1,
       justifyContent:'center',
       alignItems:'center'
 
     },
     Image:{
         
         width:200,
         height:200,
     },
     signbtn:{
         borderWidth:2,
         padding:10,
         borderRadius:5,
         width: 200,
         alignItems:'center'
     }
     
   });
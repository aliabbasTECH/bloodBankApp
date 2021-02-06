/// this page show all donors

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
  FlatList,
} from 'react-native';
import database from '@react-native-firebase/database';


function Donors (props) {
  
    const [state, setState] = useState([])
 
    useEffect(() => {
      return () => {
        database().ref('/').once('value')
        .then(snapshot => {
           let data = snapshot.val();
           setState(data)
        });
  
      }
    },[]);
  
  
    
    console.log('User data: ',state)
       
        

       
     return (
         
          <View style={styles.container}> 
                 
                 {/* <FlatList style={{width:"100%"}}
                           data={state.list}
                           keyExtractor={(item)=>item.key}
                           renderItem={({item})=>{
                            return(
                             <View>
                                <Text>{item.name}  {item.age}</Text>
                             </View>)
                 }}/> */}

                

                
          </View>
        
      
     );
   };
 
 
 export default Donors;
 
 
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
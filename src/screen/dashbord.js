import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import database from '@react-native-firebase/database';
import {connect} from 'react-redux'
import {set_users,signout,getallfirebaasedata} from '../Services/actions/action'
import database from '@react-native-firebase/database';
// this Dashboard show only userdata 


function Dashbord(props) {
   
     console.log("dasjboarduser===>",props.c_user)
   return (
       
        <View style={styles.container}> 
               <View style={styles.ineerCon1}> 
               
               </View> 


               <View style={styles.ineerCon2}> 
               
               </View>



               <View style={styles.ineerCon3}> 

                   <TouchableOpacity style={styles.signbtn} onPress={()=> props.navigation.navigate("Donors")} >
                    <Text>Donors</Text>
                   </TouchableOpacity> 

               </View>
               
      
        </View>



      
    
   );
 };

 const mapStateToProps= (state) =>({
        c_user:state.curentuser
})




export default connect(mapStateToProps,null)(Dashbord);


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  ineerCon1: {
      backgroundColor:"#F9FDE7",
      width:"100%",
      flex:1
  },
  ineerCon2:{
    backgroundColor:"white",
      width:"100%",
      flex:8
  },
  ineerCon3:{
    backgroundColor:"#ECECEC",
      width:"100%",
      flex:1,
      justifyContent:'center',
    alignItems:'center'
  },
  heading:{
      paddingBottom:20
  },
  
  
  
});






// <<<<<<<<<<<<<< R.W For dashboard >>>>>>>>>>>

/*

   
       import {connect} from 'react-redux'
console.log("dashboard=========>",props.usersdatas)




const mapStateToProps= state =>({
       usersdatas:state.Users
}
)

const mapDispatchToProps = dispatch=>({
    
})




export default   connect(mapStateToProps,mapDispatchToProps)(Dashbord);


*/ 
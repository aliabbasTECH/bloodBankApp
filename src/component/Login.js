import React, {useState, useEffect}
 from 'react';
import {
    StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux'
import {CurrentUser} from '../Services/actions/action'


 function Login(props){
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
   

    const login = async ()=>{

        auth().signInWithEmailAndPassword(Email,Password)
        .then((result) => {
            let user = {
                userid:result.user.uid ,
                Email:result.user.email,
            } 
            let key = user.userid;
            let todo =  user  
            console.log("todo>>>>>",todo)
            database().ref('/Donors').child(key).set(todo)
            .then(props.CurrentUser(todo))
            .then(props.navigation.navigate("Dashbord")) 

            
         })
        .catch(error => {
        Alert.alert( error.message);
  });


    };

    return(
    
<View style={styles.container} >
          <TextInput value={Email}  onChangeText={(e) => setEmail(e)}  style={styles.userinput} placeholder="Email Address"/>

           <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=> setPassword (e)}  style={styles.userinput} placeholder="Password"/>      
        
      <View style={styles.btncontainer} >

        <TouchableOpacity style={styles.signbtn} onPress={() => props.navigation.navigate("Register")} >         
             <Image  style={styles.Image} source={require('../assets/user.png')} />           
             <Text style={{fontSize:22,}} > Back </Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.signbtn} onPress={login}>
             <Image style={styles.Image} source={require('../assets/user.png')} />
             <Text style={{fontSize:22,}} > login </Text>
         </TouchableOpacity>

       </View>              
 </View>

    )
              
    
}
const mapStateToProps= (state) =>({
    
})

const mapDispatchToProps = (dispatch)=>({
    CurrentUser:(onlineuser)=>dispatch(CurrentUser(onlineuser)),
       
       
})


export default connect(mapStateToProps,mapDispatchToProps)(Login)


  
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    
      },
      Image:{
          width:20,
          height:20,
      },
      heading:{
          paddingBottom:50,
          fontSize:50,
      },
      userinput:{
          fontSize:20,
          borderWidth :2,
          borderColor: 'green',
          padding:10,
          margin:5,
          width:300,
    
      },
      btncontainer:{
          flexDirection:'row',
         
          height:100  ,
          width:300,
          justifyContent:'center',
          alignItems:'center',
          
      },
      signbtn:{
          borderColor: 'green',
          borderWidth:2,
          padding:5,
          borderRadius:5,
          width: 130,
          alignItems:'center',
          margin:20
      }
    
  });


















  ///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


 // const [displayName, setdisplayName] = useState("")
    // const [Phone, setPhone] = useState("")
    // const [blood, setBlood] = useState("")
    // const [showLoading, setShowloading] = useState(false)
    // const [Country, setCountyr] = useState("")
    // const [Provence, setProvence] = useState("")
    // const [City, setCity] = useState("")
  
        
    //     setShowloading(true)
    //     try{
    //         const dologin = await auth().signInWithEmailAndPassword(email,Password);
    //         setShowloading(false);

    //         if(dologin.user){
    //             // navigation.navigate("Dashbord");
             
            
    //         }
    //     } catch (e){
    //         setShowloading(false);
    //         Alert.alert( e.message)
               
            
    //     };
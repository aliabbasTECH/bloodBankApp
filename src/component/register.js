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
import {connect} from 'react-redux'
import {set_users,CurrentUser} from '../Services/actions/action'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


function Register(props){
    const [displayName, setdisplayName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Phone, setPhone] = useState("")
    const [blood, setBlood] = useState("")
    const [showLoading, setShowloading] = useState(false)
    const [Country, setCountyr] = useState("")
    const [City, setCity] = useState("")
   const [Address,setAddress]=useState("")
    
    const Register = async ()=>{    
        auth().createUserWithEmailAndPassword(Email,Password)
        .then((result) => {
            let user = {
                userid:result.user.uid ,
                Name:displayName,
                Email:result.user.email,
                phonenumber:Phone,
                bloodgroup:blood,
                country:Country,
                city:City,
                address:Address,
            } 
            let key = user.userid;
            let todo =  user  
            database().ref('/Donors').child(key).set(todo)
            .then(props.Set_Users(todo))
            .then(props.CurrentUser(todo))
            props.navigation.navigate("Dashbord");
         })
        .catch(error => {
        Alert.alert( error.message);
  });

};

    return(
    
        <View style={styles.container}> 
        <Text style={styles.heading}> Registration </Text>
              
       <TextInput value={displayName}  onChangeText={(e) => setdisplayName(e)}  style={styles.userinput} placeholder="name"/>
              
       <TextInput value={Email}  onChangeText={(e) => setEmail(e)}  style={styles.userinput} placeholder="Email Address"/>

       <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=> setPassword (e)}  style={styles.userinput} placeholder="Password"/>                  
   
       <TextInput value={Phone}  onChangeText={(e) => setPhone (e)}  style={styles.userinput} placeholder="Phone Number "/>

       <TextInput value={blood}  onChangeText={(e) => setBlood (e)}  style={styles.userinput} placeholder="blood type "/>
               
       <TextInput value={Country} dataDetectorTypes="address" onChangeText={(e)=> setCountyr (e)}  style={styles.userinput} placeholder="Country"/>

      
       <TextInput value={City}  onChangeText={(e)=> setCity(e)}  style={styles.userinput} placeholder="City"/> 
 
       <TextInput value={Address}  onChangeText={(e)=> setAddress (e)}  style={styles.userinput} placeholder="Address"/> 

       <View style={styles.btncontainer} >

       <TouchableOpacity style={styles.signbtn} onPress={Register} >         
          <Image  style={styles.Image} source={require('../assets/user.png')} />           
             <Text style={{fontSize:22,}} > Register </Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.signbtn} onPress={()=> props.navigation.navigate("Login")}>
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
        Set_Users:(data)=>dispatch(set_users(data)),
        CurrentUser:(onlineuser)=>dispatch(CurrentUser(onlineuser)),
})


export default connect(mapStateToProps,mapDispatchToProps)(Register);


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





  
















  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< R.W >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     // setShowloading(true)
        // try{
        //     const doRegister = await auth().createUserWithEmailAndPassword(Email,Password,);
        //     setShowloading(false);

        //     if(doRegister.user){
        //         // // ()=> props.navigation.navigate("Dashbord");
        //         // console.log("user====<>" ,doRegister.user)
        //         let Email=doRegister.user.email
                
        //         let Data = {Email,displayName,Phone,blood,Country,Provence,City}
                
        //         props.Set_Users(Data)
        //     }
        // } catch (e){
        //     setShowloading(false);
        //     Alert.alert( e.message)
               
            
        // };
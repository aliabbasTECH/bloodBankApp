// import React, {useState, useEffect}
//  from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// // import database from '@react-native-firebase/database';
// // import {connect} from 'react-redux'
// // import {set_users} from '../Services/actions/action'




// function Form(props) {
   

    

//     const [Name, setName] = useState()
//     const [Email, setEmail] = useState()
//     const [Password, setPassword] = useState()  

//     const save_data=()=>{
//            let user={Name,
//             Email,Password}
//            props.Set_Users(user)

           
//     }
    
//    useEffect(() => {
   
// }, [ ])


//   //  
//    return (
       
//     <View style={styles.container}> 
//          <Text style={styles.heading}> formScreen</Text>
               
//         <TextInput value={Name}  onChangeText={(e) => setName(e)}  style={styles.userinput} placeholder="name"/>
               
//         <TextInput value={Email}  onChangeText={(e) => setEmail(e)}  style={styles.userinput} placeholder="Email Address"/>

//         <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=> setPassword (e)}  style={styles.userinput} placeholder="Password"/>                  
    
//         <TouchableOpacity style={styles.signbtn} onPress={save_data}>
//             <Text>signin</Text>
//         </TouchableOpacity>
               
              
//     </View>
      
    
//    );
//  };
// //  const mapStateToProps= (state) =>({
// //      users:state.users
// // })

// // const mapDispatchToProps = (dispatch)=>({
// //          Set_Users:(data)=>dispatch(set_users(data)),
        
// // })

// export default   Form;


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'

//   },
//   heading:{
//       paddingBottom:50
//   },
//   userinput:{
//       borderWidth :2,
//       borderColor: 'green',
//       padding:5,
//       margin:2,
//       width:200,

//   },
//   signbtn:{
//       borderWidth:2,
//       padding:10,
//       borderRadius:5,
//       width: 100,
//       alignItems:'center'
//   }
  
// });


















/*s
  <<<<<<<<< R.W  for form.js >>>>>>>>>>>




  <<<<<<<<< user data >>>>>>>>> 

   const [Name, setName] = useState()
    const [Number, setNumber] = useState(null)
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [Blood, setBlood] = useState()
    const [Location, setLocation] = useState()
    const [Subscribe, setSubscribe] = useState(false)
    const [Pastdesese , setPastdeses] = useState()


    <<<<<<<<function for collect data from  all inputs setvalue hooks
 

const  save_data = (props) =>{
       let user ={
        Name,
        Number,
        Email,
        Password,
        Blood,
        Location,
        Pastdesese
}
           
     database().ref('/').child('users').push(user)   //send user data to firebase database
    
  }


  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< text input collection of data from input to send to useState >>>>>>>>>>>>>>>>>>>>>>>>



    <TextInput value={Name}  onChangeText={(e) => setName(e)}  style={styles.userinput} placeholder="name"/>
               
    <TextInput value={Email}  onChangeText={(e) => setEmail(e)}  style={styles.userinput} placeholder="Email Address"/>
               
    <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=> setPassword (e)}  style={styles.userinput} placeholder="Password"/>
  
    <TextInput value={Number} keyboardType="number-pad" onChangeText={(e)=> setNumber (e)}  style={styles.userinput} placeholder="number"/>

    <TextInput value={Blood}  onChangeText={(e) => setBlood (e)}  style={styles.userinput} placeholder="blood type "/>
               
    <TextInput value={Location} dataDetectorTypes="address" onChangeText={(e)=> setLocation (e)}  style={styles.userinput} placeholder="Location"/>

     TextInput value={Pastdesese}  onChangeText={(e)=> setPastdeses (e)}  style={styles.userinput} placeholder="Past Desese "/> 

  
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   buttons for collecting  data >>>>>>>>>>>>>>>>>>>>>>>>


              <TouchableOpacity style={styles.signbtn} onPress={()=>props.navigation.navigate("Map")}>
                  <Text>location</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.signbtn} onPress={save_data}>
                  <Text>signin</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.signbtn} onPress={()=>props.navigation.navigate("Counter")}>
                  <Text>counter</Text>
              </TouchableOpacity> 
  



<<<<<<<<<<<<<<<<<<<<< redux codes >>>>>>>>>>>>>>>>>

import {connect} from 'react-redux'
import {userdata,removeUserdata} from  '../Services/actions/action'    




             <TouchableOpacity style={styles.signbtn} 
              onPress={()=>props.U_D_H({price:1000000,name:"shoos"})}>
                  <Text>get data</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signbtn} onPress={()=>props.navigation.navigate("username")}>
                  <Text>dashbord</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.signbtn} 
               onPress={()=>props.R_U_D_H()}>
                  <Text>remove data</Text>
              </TouchableOpacity>




const mapStateToProps= state =>({
       usersdatas:state.Users
}
)

const mapDispatchToProps = dispatch=>({
    U_D_H: data=>dispatch(userdata(data)),
    R_U_D_H: data=>dispatch(removeUserdata(data))
})
export default   connect(mapStateToProps,mapDispatchToProps)(Form);

  */
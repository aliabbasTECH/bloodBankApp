import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {UseState,useEffect} from 'react';



const FBDB=()=>{
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
}



  
 
  



 
const CurrentUser =(onlineuser)=>{
  return (dispatch)=>{
      
      console.log("paylod===>",onlineuser)
      dispatch({type :"CURRENTUSER",action:onlineuser })
     
}}   
        
       


const set_users =(data)=>{
    return (dispatch)=>{
      
        
        dispatch({type :"SETDATA",action:data })
       
}}

export {
    // facebook_login,
    set_users,
    CurrentUser,
    // signout,
    // getfirebaasedata,
    // getallfirebaasedata
    
    
}




















// const facebook_login =(history)=>{
       
//         return (dispatch) => {
//             var provider = new firebase.auth.FacebookAuthProvider();

//             // firebase.auth().signInWithPopup(provider).then(function(result) {             
//             //     var token = result.credential.accessToken;           
//             //     var user = result.user;

//             //     let creat_user ={
//             //         name: user.displayName,
//             //         email: user.email,
//             //         profile: user.photoURL,
//             //         uid: user.uid
//             //     }

//             // firebase.database().ref('/').child(`users/${user.uid}`).set(creat_user)
//             // .then( ()=>{
//             //     dispatch({type:"SETUSER",payload: creat_user })
//             //     alert("user login sucesful")
//             //     history.push('/post')
//             //     history.push('/chat')
//             // })
                
//             //   }).catch(function(error) {            
//             //     var errorCode = error.code;
//             //     var errorMessage = error.message;              
//             //     console.log(errorMessage)
//             //   });
            
//     }
// }


// const signout=(data)=>{
//   return (dispatch)=>{
//     auth().signOut()
//     .then( ()=>props.navigation.navigate("home"))
//     .catch(function(error){
//       alert(error)
//     })
    
//     }
// }

// const getfirebaasedata=(data)=>{
//   return (dispatch)=>{
//     // database().ref('/Donors').on('child_added',function(data){         
//     //   console.log("on cchange data =====>", data.val())
//     //   })     
      
//       } 
// }
// const getallfirebaasedata=(data)=>{
//   return (dispatch)=>{
   
//     database().ref('/Donors').on('value',function(data){
//       console.log("FBDB",data.val())
//     }) 
//       dispatch({type:'FIREBASE',payload:data})
//       } 
// }



/*
action.js
import {USER_DATA,REMOVE_USER_DATA} from '../constants' // import USER_DATA String for saving in action type

export const userdata= (data)=>{
    // console.log("action data====>",data )
    return{
        type: USER_DATA,
        data:data
    }
}

export const removeUserdata= (data)=>{
    console.log("Remove action data====>",data )
    return{
        type: REMOVE_USER_DATA,
        
    }
}

*/ 

// let users= []
        // firebase.database().ref('/').child(`users`).on('child_added',(data)=>{
        //         users.push(data.val())
           
        // })
        // dispatch({type : "SETDATA",payload:data })
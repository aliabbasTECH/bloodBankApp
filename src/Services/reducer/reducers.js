const INITIAL_STATE = {
    users: [
        
    ],
    currentuser:[
        
        {}
    ],
}

export default (state = INITIAL_STATE, action) => {
     console.log("reducer1===>",action)
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users:[...state.users,action.data],
                
                 
            });
        case "CURRENTUSER":
            console.log("reducer2===>",action)
            return({
                ...state,
                currentuser:[...state.users,action.data],
                 
            })
        // case "FIREBASE":
        //     return({
        //         ...state,
        //         currentuser:[...state.currentuser,action.payload] 
        // })
                

        
    }
    return state
    
}

// console.log("reducer current ===>",INITIAL_STATE.currentuser)



/*

reducers.js

import {USER_DATA,REMOVE_USER_DATA} from '../constants'  // we import USER_DATA string from constants.js ,  for switch condition

const initialState={               //initialize condition of user data 
    UserData:[]                   //collect user data in array
}

export default function Users (state= [], action)  //   create state send user data in state and set action
{
   switch(action.type){
       case USER_DATA:
           console.log(" reducer===>",action)
            return[
                ...state,                  //for prrivous initial userdata
                {UserData:action.data}           // what change in action save in user througe this 
            ]

            case REMOVE_USER_DATA :
           console.log("remove reducer===>",state)
                state.pop();
            return[
                ...state,                  //for prrivous initial userdata
                          // what change in action save in user througe this 
            ]

            default:
                return state                  // if no data come from action or if no USER_DATA string is present so it  have initial state data

    }
}

*/
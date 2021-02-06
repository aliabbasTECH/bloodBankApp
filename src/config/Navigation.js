import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native' 
import Home from '../screen/home' 
import About from '../screen/About' 
// import Map from '../screen/mapview' 
// import Form from '../screen/form'
import Dashbord from '../screen/dashbord'
import Donors from '../screen/Donors'
// import GoogleSignIn from './firebaseauth'
import Login from '../component/Login'
import Register from '../component/register'

const Stack = createStackNavigator();

function AppNavigation() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{title:"Bloood Donation App",
          headerStyle:{
                backgroundColor:"red",
                
            },
            headerTitle: props => <Image style={{height:55 , width:"100%",resizeMode:"contain"}} source={require('../assets/baner.png')} />


          }}  name="home" component={Home} />
          <Stack.Screen name="about" component={About} />
          {/* <Stack.Screen name="Map" component={Map} /> */}
          {/* <Stack.Screen name="form" component={Form} /> */}
          {/* <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} /> */}
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashbord" component={Dashbord} />
          <Stack.Screen name="Donors" component={Donors} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

 
   





export default AppNavigation;
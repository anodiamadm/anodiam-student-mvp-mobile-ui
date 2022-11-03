import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import WelcomeScreen from '../components/screens/authScreens/WelcomeScreen';
import SigninScreen from '../components/screens/authScreens/SigninScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

const AuthStack = () => {
  return(
    <Auth.Navigator>
      <Auth.Screen name='WelcomeScreen' component={WelcomeScreen} 
        options={{headerShown: false, ...TransitionPresets.RevealFromBottomAndroid}}
      />
      <Auth.Screen name='SigninScreen' component={SigninScreen} 
        options={{headerShown: false, ...TransitionPresets.RevealFromBottomAndroid}}
      />
      <Auth.Screen name='DrawerNavigator' component={DrawerNavigator} 
        options={{headerShown: false, ...TransitionPresets.RevealFromBottomAndroid}}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;
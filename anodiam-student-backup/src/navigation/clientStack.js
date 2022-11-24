// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../components/screens/ClientTabs/SearchScreen';
import SearchResultScreen from '../components/screens/SearchResultScreen';

const ClientSearch = createStackNavigator();

export function ClientStack() {
  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name='SearchScreen' component={SearchScreen}
        options = {
          ()=>({
            headerShown: false
          })
        }
      />
      <ClientSearch.Screen
        name='SearchResultScreen' component={SearchResultScreen}
        options = {
          ()=>({
            headerShown: false
          })
        }
      />
    </ClientSearch.Navigator>
  )
}
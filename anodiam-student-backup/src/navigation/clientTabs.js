import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../components/screens/HomeScreen';
// import SearchScreen from '../components/screens/ClientTabs/SearchScreen';
import CoursesScreen from '../components/screens/ClientTabs/CoursesScreen';
import AccountScreen from '../components/screens/ClientTabs/AccountScreen';
import { colors } from '../global/GlobalStyles';
import { ClientStack } from './clientStack';

const ClientTabs = createBottomTabNavigator();

const RootClientTabs = () => {
  return (
    <ClientTabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.buttons, tabBarStyle: { position: 'absolute' }}}>
      <ClientTabs.Screen
        name='HomeScreen' component={HomeScreen} options={{tabBarLabel: 'Home', 
        tabBarIcon: ({color, size})=>(<Icon name='home' type='material' color={color} size={size} />)}}
      />
      <ClientTabs.Screen
        name='ClientStack' component={ClientStack} options={{tabBarLabel: 'Search', 
        tabBarIcon: ({color, size})=>(<Icon name='search' type='material' color={color} size={size} />)}}
      />
      <ClientTabs.Screen
        name='CoursesScreen' component={CoursesScreen} options={{tabBarLabel: 'My Courses', 
        tabBarIcon: ({color, size})=>(<Icon name='library' type='material-community' color={color} size={size} />)}}
      />
      <ClientTabs.Screen
        name='AccountScreen' component={AccountScreen} options={{tabBarLabel: 'My Account', 
        tabBarIcon: ({color, size})=>(<Icon name='person' type='material' color={color} size={size} />)}}
      />

    </ClientTabs.Navigator>
  );
}
 
export default RootClientTabs;
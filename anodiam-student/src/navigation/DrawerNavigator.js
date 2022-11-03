import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './clientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/GlobalStyles';
import BusinessConsoleScreen from '../components/screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false}} drawerContent={props=><DrawerContent {...props} />}>
      <Drawer.Screen name='RootClientTabs' component={RootClientTabs} options={{title:'Home', drawerIcon: ({focused, size}) => 
        (<Icon type='material-community' name='home' color={focused ? colors.buttons : colors.buttonLightBlue} size={size} />)}}
      />
      <Drawer.Screen name='BusinessConsoleScreen' component={BusinessConsoleScreen} options={{title:'Business Console', drawerIcon: ({focused, size}) => 
        (<Icon type='material' name='business' color={focused ? colors.buttons : colors.buttonLightBlue} size={size} />)}}
      />
    </Drawer.Navigator>
  );
}
 
export default DrawerNavigator;
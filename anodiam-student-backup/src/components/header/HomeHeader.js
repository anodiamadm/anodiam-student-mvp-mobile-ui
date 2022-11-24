import React from 'react';
import { View, Text, Image } from 'react-native';
import { screenStyles } from '../screens/ScreenStyles';
import { globalStyles, colors, parameters } from '../../global/GlobalStyles';
import { Icon, Button, withBadge } from "react-native-elements";

const HomeHeader = ({navigation}) => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={screenStyles.header}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 30}}>
        <Icon type='material-community' name='menu' color={colors.headertext} size={32} 
          onPress={()=>{navigation.toggleDrawer()}}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        <Image source={require('../../../assets/adaptive-logo.png')} style={{height: 30, width: 30}}/>
        <Text style={{color: colors.headertext, fontSize: 24, fontWeight: 'bold', marginLeft: 1}}>nodiam</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
        <BadgeIcon type='material-community' name='cart' size={35} color={colors.headertext} />
      </View>
    </View>
  );
}
 
export default HomeHeader;
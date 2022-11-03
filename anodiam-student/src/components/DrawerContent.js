import React, { useState, useContext, useEffect } from 'react';
import {View, Text, Linking, Pressable, Alert, Switch, StyleSheet} from 'react-native';
import {DrawerItemList, DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import { Avatar, Icon } from 'react-native-elements';
import { colors, globalStyles } from '../global/GlobalStyles';

const DrawerContent = (props) => {
  return (
    <View style={globalStyles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{marginLeft: -20, alignItems: 'center', backgroundColor: colors.buttons, paddingVertical: 10}}>
          <View style={{flexDirection: 'row', color: colors.cardbackground}}>
            <Avatar rounded avatarStyle={styles.avatar} size={75} 
              source={{uri: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'}}
            />
            <View style={{marginLeft: 20, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight:'bold', color:colors.cardbackground, fontSize: 18}}>John Chakr</Text>
              <Text style={{color:colors.cardbackground, fontSize: 14}}>johak@ano.com</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
            <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 5}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>1</Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>My Favorites</Text>
              </View>
            </View>
            <View style={{marginLeft: 30, flexDirection: 'row', marginTop: 5}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>0</Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>My Cart</Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props}/>
        <DrawerItem label='Payment' icon={({color, size})=>(<Icon type='material-community' name='credit-card-outline' color={color} size={size} />)} />
        <DrawerItem label='Promotion' icon={({color, size})=>(<Icon type='material-community' name='tag-heart' color={color} size={size} />)} />
        <DrawerItem label='Settings' icon={({color, size})=>(<Icon type='material-community' name='cog-outline' color={color} size={size} />)} />
        <DrawerItem label='Help' icon={({color, size})=>(<Icon type='material-community' name='lifebuoy' color={color} size={size} />)} />
        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}><Switch trackColor={{false: colors.grey2, true: colors.grey4}} thumbColor={colors.buttons}/></View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem label='Sign Out' icon={({color, size})=>(<Icon type='material-community' name='logout-variant' color={color} size={size} />)} />
    </View>
  );
}
 
export default DrawerContent;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2, borderColor: colors.cardbackground
  },
  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10
  },
  darkThemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold'
  }
});
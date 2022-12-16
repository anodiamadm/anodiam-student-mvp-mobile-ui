import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { headerStyles } from "./HeaderStyles"
import React from 'react'
import { colors } from '../../global/GlobalStyles'
import { Image } from 'react-native'

const AuthHeader = () => {
  return (
    <View style={headerStyles.authHeader}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar}/>
      <Image source={require('../../../assets/adaptive-logo.png')} style={headerStyles.headerLogo}/>
      <Text style={headerStyles.catchLine}>Education that enlightens!</Text>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({})
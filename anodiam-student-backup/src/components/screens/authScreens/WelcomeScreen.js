import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { screenStyles } from "../ScreenStyles";
import { catchline, colors, slider } from '../../../global/GlobalStyles';
import Swiper from 'react-native-swiper';
import { Button } from "react-native-elements";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header title='my account' type='arrow-left' navigation={navigation} />
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar}/>
      <View style={{flex:3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20}}>
        <Text style={{fontSize: 26, color: colors.titletext, fontWeight: 'bold'}}>{catchline.line1}</Text>
        <Text style={{fontSize: 26, color: colors.titletext, fontWeight: 'bold'}}>{catchline.line2}</Text>
      </View>
      <View style={{flex:4, justifyContent: 'center'}}>
        <Swiper>
          <View style={screenStyles.slide1}>
            <Image
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfr6EhSpbw_xZC2Tl8UaxNcedBjl2V9nHyLNprOfPuGw&s"}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={screenStyles.slide2}>
            <Image
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXayLa-aEG8BCsWqvZVD7d1r4R_rNx8EndTGu3VBUV7g&s"}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={screenStyles.slide3}>
            <Image
              source={{uri: "https://photographylife.com/wp-content/uploads/2019/11/Fujifilm-GFX-100-Image-Sample-45.jpg"}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={screenStyles.slide4}>
            <Image
              source={{uri: "https://media.istockphoto.com/photos/maldives-tropical-island-picture-id1360554439?b=1&k=20&m=1360554439&s=170667a&w=0&h=-IRAQ28DT0XwLBQ-_gjV3erce0OdvxiWPaa_Ioz95ws="}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex:4, justifyContent: 'flex-end'}}>
        <View style={{marginBottom: 20, marginHorizontal: 20}}>
          <Button title={'Sign-in'.toUpperCase()} buttonStyle={screenStyles.styledButton} 
            titleStyle={screenStyles.buttonTitle} onPress={()=>{navigation.navigate('SigninScreen')}}
          />
        </View>
        <View style={{marginBottom: 20, marginHorizontal: 20}}>
          <Button title="Create an account" buttonStyle={screenStyles.createbutton}
            titleStyle={screenStyles.createbuttontitle} 
          />
        </View>
      </View>
    </View>
  );
}
 
export default WelcomeScreen;
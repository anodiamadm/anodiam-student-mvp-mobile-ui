import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { screenStyles } from "../ScreenStyles";
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors } from '../../../global/GlobalStyles';
import { Formik } from 'formik';
import AuthHeader from "../../header/AuthHeader";
import SignupScreen from "./SignupScreen";
import ForgetPasswordScreen from "./ForgetPasswordScreen";

const SigninScreen = ({navigation}) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  return (
    <View>
      <AuthHeader />
      <Text style={screenStyles.title}>Sign-in</Text>
      <Formik initialValues={{email: '', password: ''}}
        onSubmit={(values, actions)=>{
          actions.resetForm();
          navigation.navigate('DrawerNavigator');
        }}
      >
        {(props)=>(
          <View>
            <View style={{marginTop: 10}}>
              <View>
                <TextInput style={screenStyles.textInput1} placeholder="Email" value={props.values.email} 
                  onChangeText={props.handleChange('email')} keyboardType='email-address'
                />
              </View>
              <View style={screenStyles.textInput2}>
                <Animatable.View animation={textInput2Focused?"":"bounceIn"} duration={600}>
                  <Icon name='lock' iconStyle={{color: colors.grey3}} type='material' />
                </Animatable.View>
                <TextInput placeholder="Password" style={{width: '82%'}}
                  onFocus={()=>{setTextInput2Focused(false)}} onBlur={()=>{setTextInput2Focused(true)}}
                  value={props.values.password}  onChangeText={props.handleChange('password')}
                />
                <Animatable.View animation={textInput2Focused?"":"bounceIn"} duration={600}>
                  <Icon name='visibility-off' iconStyle={{color: colors.grey3}} type='material' />
                </Animatable.View>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 20}}>
              <Button title={'Sign-in'.toUpperCase()} buttonStyle={screenStyles.styledButton}
                titleStyle={screenStyles.buttonTitle} onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={{marginBottom: 10, marginHorizontal: 20}}>
        <Button title={'Sign-up'.toUpperCase()} buttonStyle={screenStyles.createbutton}
          titleStyle={screenStyles.createbuttontitle} onPress={()=>{navigation.navigate(SignupScreen)}}
        />
      </View>
      <View style={{alignItems: 'center', margin: 5}}>
        <Text style={{...screenStyles.text1, textDecorationLine: 'underline'}} onPress={()=>navigation.navigate(ForgetPasswordScreen)}>
          Change / forgot password?
        </Text>
      </View>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={screenStyles.text4}>OR</Text>
      </View>
      <View>
        <SocialIcon title="Sign in with Facebook" button type="facebook" style={screenStyles.socialicon}
          onPress={()=>{}}
        />
      </View>
      <View>
        <SocialIcon title="Sign in with Google" button type="google" style={screenStyles.socialicon}
          onPress={()=>{}}
        />
      </View>
    </View>
  );
}
 
export default SigninScreen;
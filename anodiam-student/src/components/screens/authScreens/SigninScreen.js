import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Header from "../../header/Header";
import { screenStyles } from "../ScreenStyles";
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors } from '../../../global/GlobalStyles';
import { Formik } from 'formik';

const SigninScreen = ({navigation}) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  return (
    <View>
      <Header title='my account' type='arrow-left' navigation={navigation} />
      <Text style={screenStyles.title}>Sign-in</Text>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={screenStyles.text1}>Please enter email address and password</Text>
        <Text style={screenStyles.text1}>registered with your account</Text>
      </View>
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
                  onChangeText={props.handleChange('email')}
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
            <View style={{margin: 20}}>
              <Button title={'Sign-in'.toUpperCase()} buttonStyle={screenStyles.styledButton}
                titleStyle={screenStyles.buttonTitle} onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={{alignItems: 'center'}}>
        <Text style={{...screenStyles.text1, textDecorationLine: 'underline'}}>Change / forgot password?</Text>
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
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={screenStyles.text1}>New to Anodiam?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20 }}>
        <Button title="Create an account" buttonStyle={screenStyles.createbutton}
          titleStyle={screenStyles.createbuttontitle} 
        />
      </View>
    </View>
  );
}
 
export default SigninScreen;
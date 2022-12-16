import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, TextInput, FlatList, Keyboard, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { screenStyles } from './screens/ScreenStyles';
import { filterData } from '../global/Data';
import filter from 'lodash/filter';

const SearchComponent = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);
  const contains = ({name}, query) => {
    if(name.includes(query)){
      return true;
    }
    return false;
  }
  const handleSearch = text => {
    const dataSearch = filter(filterData, userSearch => {
      return contains(userSearch, text)
    })
    setData([...dataSearch])
  }
  return (
    <View>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.searchArea}>
          <Icon name='search' type='material' style={styles.searchIcon} iconStyle={{marginLeft: 5}} size={32} />
          <Text style={{fontSize: 15, marginLeft: 10}}>What subjects are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType='fade' transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={screenStyles.textInput2}>
              <Animatable.View animation={textInputFocused ? 'fadeInRight' : 'fadeInLeft'} duration={400} >
                <Icon name={textInputFocused ? 'arrow-back' : 'search'} style={styles.icon2} type='material' iconStyle={{color: colors.grey2}}
                  onPress={()=>{
                    if(textInputFocused) {
                      setModalVisible(false);
                      setTextInputFocused(true);
                    }
                  }}
                />
              </Animatable.View>
              <TextInput style={{width: '80%'}} placeholder='' autoFocus={false} ref={textInput} 
                onFocus={()=>{setTextInputFocused(true)}} onBlur={()=>{setTextInputFocused(false)}}
                onChangeText={handleSearch}
              />
              <Animatable.View animation={textInputFocused ? 'fadeInLeft' : ''} duration={400} >
                <Icon name={textInputFocused ? 'cancel' : null } iconStyle={{color: colors.grey2}} type='material' 
                  onPress={()=>{
                    textInput.current.clear()
                  }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>{
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultScreen', {item: item.name});
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: colors.grey2, fontSize: 15}}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

export default SearchComponent;

const styles = StyleSheet.create({
  searchArea: {
    marginTop: 10,
    height: 50,
    backgroundColor: colors.grey4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2
  },
  modal: {
    flex: 1
  }
})
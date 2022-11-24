import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import { ImageBackground } from 'react-native';
import { filterData } from '../../../global/Data';
import { colors } from '../../../global/GlobalStyles';
import SearchComponent from '../../SearchComponent';

const SCREENWIDTH = Dimensions.get('window').width;
const SearchScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <SearchComponent/>
      <View>
        <FlatList
          style={{marginTop: 5, marginLeft: -10}} data={filterData} keyExtractor={item=>item.id} 
          renderItem={({item})=>(
            <TouchableWithoutFeedback onPress={()=>{
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={item.Image} >
                  <View style={styles.textView}>
                    <Text style={{color: colors.cardbackground}}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false} showsVerticalScrollIndicator={false} numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
          ListFooterComponent={<Footer navigation={navigation} />}
        />
      </View>
    </View>
  );
}
 
export default SearchScreen;

const Footer = ({navigation}) => {
  return(
    <View style={{marginBottom: SCREENWIDTH * 0.26, marginTop: -12}}>
      <FlatList
        style={{marginVertical: 5}} data={filterData} keyExtractor={item=>item.id} 
        renderItem={({item})=>(
          <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate('SearchResultScreen', {item: item.name});
            }}
          >
            <View style={styles.imageView}>
              <ImageBackground style={styles.image} source={item.Image} >
                <View style={styles.textView}>
                  <Text style={{color: colors.cardbackground}}>{item.name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false} showsVerticalScrollIndicator={false} numColumns={2}
        ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREENWIDTH * 0.4475,
    height: SCREENWIDTH * 0.4475,
    marginLeft: SCREENWIDTH * 0.035,
    marginBottom: SCREENWIDTH * 0.035
  },
  image: {
    borderRadius: 10,
    width: SCREENWIDTH * 0.4475,
    height: SCREENWIDTH * 0.4475
  },
  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12
  },
  textView: {
    height: SCREENWIDTH * 0.4475,
    width: SCREENWIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)'
  }
})
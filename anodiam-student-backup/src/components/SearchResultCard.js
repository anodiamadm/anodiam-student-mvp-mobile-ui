import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import React from 'react'
import { colors } from '../global/GlobalStyles'
import LectureCard from './LectureCard';

const SearchResultCard = ({
  onPressCourseCard, courseName, numberOfReview, averageReview, board, year, subject,
  discountPercent, teacherName, images, lectureData, price
}) => {
  return (
    <View>
      <View style={styles.view1}>
        <View style={{height: 150}}>
          <ImageBackground style={{height: 160}} source={images} imageStyle={styles.imageStyle} />
          <View style={styles.image}>
            <Text style={styles.text1}>{averageReview}</Text>
            <Text style={styles.text2}>{numberOfReview} reviews</Text>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={{paddingTop: 8}}>
            <Text style={styles.text5}>{courseName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.view4}>
              <Text style={styles.viwe5}> {board} </Text>
            </View>
            <View style={{flex: 12}}>
              <View style={{marginLeft: 30}}>
                <Text style={styles.viwe5}>Year - {year}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.view4}>
              <Text style={styles.viwe5}> {subject} </Text>
            </View>
            <View style={{flex: 12}}>
              <View style={{marginLeft: 30}}>
                <Text style={styles.viwe5}>By - {teacherName}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.view4}>
              <Text style={styles.viwe5StrikeOut}>Original price - ₹{price}</Text>
            </View>
            <View style={{flex: 12}}>
              <View style={{marginLeft: 30}}>
                <Text style={styles.viwe5}>Your discount - {discountPercent} % </Text>
                <Text style={styles.viwe5}>Final price - ₹{price*(1-discountPercent/100)} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 5, paddingBottom: 20}}>
        <FlatList style={{backgroundColor: colors.cardbackground}} data={lectureData} keyExtractor={(item,index)=>index.toString()}
          horizontal={true}
          renderItem={({item,index})=>(
            <LectureCard image={item.Image} lectureName={item.name} duration={item.duration} isOpen={true} disabled={false}/>
          )}
        />
      </View>
    </View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12
  },
  imageStyle: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3
  },
  text2: {
    color: 'white',
    fontSize: 13,
    marginHorizontal: 0
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5
  },
  text3: {
    color: colors.grey2,
    fontSize: 12
  },
  text4: {
    color: colors.grey2,
    fontSize: 10,
    fontWeight: 'bold'
  },
  view3: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 7
  },
  text5: {
    color: colors.grey1,
    fontSize: 17,
    fontWeight: 'bold'
  },
  view4: {
    flex: 4,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: colors.grey4,
    marginLeft: 15
  },
  viwe5: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3
  },
  viwe5StrikeOut: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
    textDecorationLine: 'line-through'
  },
  text6: {
    fontSize: 12,
    paddingTop: 5,
    paddingHorizontal: 10,
    color: colors.grey2
  }
})
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import SearchResultCard from '../SearchResultCard'
import { courseData } from '../../global/Data';
import { colors } from '../../global/GlobalStyles';
import { FlatList } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList style={{backgroundColor: colors.cardbackground}} data={courseData} keyExtractor={(item,index)=>index.toString()}
          renderItem={({item,index})=>(
            <SearchResultCard screenWidth={SCREEN_WIDTH} images={item.Image} averageReview={item.averageReview}
              numberOfReview={item.numberOfReview} courseName={item.name} year={item.year}
              teacherName={item.teacher} subject={item.subject} board={item.board}
              price={item.price} discountPercent={item.discountPercent} lectureData={item.lectureData}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>{courseData.length} Search Result for {route.params.item}</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold'
  }
})
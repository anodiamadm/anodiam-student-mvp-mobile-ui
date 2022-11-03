import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { screenStyles } from './ScreenStyles';
import { colors, globalStyles } from '../../global/GlobalStyles';
import HomeHeader from '../header/HomeHeader';
import { Icon } from 'react-native-elements';
import DropdownComponent from '../selectors/DropdownComponent';
import { boardData, yearData, courseCardData } from '../../global/Data';
import BoardSelector from '../selectors/BoardSelector';
import { ScrollView } from 'react-native-gesture-handler';
import CourseCard from '../sections/CourseCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const [boardSelected, setBoardSelected] = useState(0);
  const [year, setYear] = useState('')
  return (
    <View style={globalStyles.container}>
      <HomeHeader navigation={navigation} />
      <Text style={screenStyles.title}>Buy Courses</Text>
      <View style={screenStyles.inforow}>
        <Text style={{...screenStyles.text3, marginRight: 20}} >Search Courses: </Text>
        <Icon type='material-community' name='tune' size={26} color={colors.grey2} />
      </View>
      <View style={{backgroundColor: colors.grey5, marginHorizontal: 20}}>
        <Text style={screenStyles.text2}>Select Board:</Text>
        <BoardSelector boardSelected={boardSelected} setBoardSelected={setBoardSelected} boardData={boardData}/>
      </View>
      <View>
        <DropdownComponent value={year} setValue={setYear} data={yearData} fieldname='Class' />
      </View>
      
      <ScrollView>
        <View style={{backgroundColor: colors.grey5, marginHorizontal: 20}}>
          <Text style={screenStyles.text2}>Your Courses:</Text>
        </View>
        <View>
          <FlatList
            style={{marginVertical: 10}} horizontal={true} data={courseCardData} keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
              <View>
                <CourseCard courseName={item.name} images={item.Image} subject={item.subjectId} board={item.boardId}
                  year={item.yearId} teacher={item.teacherId} price={item.price} averageReview={item.rating} totalReviews={item.price}
                  description={item.description} discountPercent={item.rating} screenWidth={SCREEN_WIDTH*.6}/>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
 
export default HomeScreen;
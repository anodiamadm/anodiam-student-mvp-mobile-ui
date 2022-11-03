import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { sectionStyles } from './SectionStyles';
import { colors } from '../../global/GlobalStyles';
import { screenStyles } from '../screens/ScreenStyles';

const CourseCard = ({ courseName, images, subject, board, year, teacher, price, averageReview, totalReviews,
  description, discountPercent, screenWidth}) => {
  return (
    <TouchableOpacity>
      <View style={{...sectionStyles.cardView, width: screenWidth}}>
        <View>
          <Image style={{...sectionStyles.image, width: screenWidth}} source={images} />
        </View>
        <View>
          <View>
            <Text style={{...sectionStyles.courseName, ...screenStyles.text3}}>{courseName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 5, margin: 5}}>
            <Text style={screenStyles.text3}>{subject} | {board} | {year} | {teacher}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 5, margin: 5}}>
            <Text style={screenStyles.text3}>{price} | {description} | {discountPercent}</Text>
          </View>
        </View>
        <View style={sectionStyles.review}>
          <Text style={sectionStyles.averageReview}>{ averageReview }</Text>
          <Text style={sectionStyles.totalReviews}>{ totalReviews }</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
 
export default CourseCard;

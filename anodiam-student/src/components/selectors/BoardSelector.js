import React from 'react';
import { FlatList, Image, Pressable, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { screenStyles } from '../screens/ScreenStyles';

const BoardSelector = ({boardSelected, setBoardSelected, boardData}) => {
  return (
  <View>
    <FlatList data={boardData} keyExtractor={(item)=>item.id} extraData={boardSelected} horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=>(
        <Pressable onPress={()=>{setBoardSelected(item.id)}}>
          <View style={boardSelected===item.id ? 
            {...screenStyles.boardCardSelected} : {...screenStyles.boardCard}}>
            <Image style={{height: 50, width: 50, borderRadius: 25}} source={item.Image} />
            <View>
              <Text style={boardSelected===item.id ? 
                {...screenStyles.boardCardTextSelected} : {...screenStyles.boardCardText}}
              >
                {item.name}
              </Text>
            </View>
          </View>
        </Pressable>
      )}
    />
  </View>
  );
}
 
export default BoardSelector;

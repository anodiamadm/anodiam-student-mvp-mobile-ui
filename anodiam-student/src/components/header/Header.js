import { View, StatusBar, Text } from "react-native";
import { headerStyles } from "./HeaderStyles";
import { colors } from "../../global/GlobalStyles";
import { Icon } from "react-native-elements";

const Header = ({title, type, navigation}) => {
  return (
    <View style={headerStyles.header}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar}/>
      <View style={{marginLeft:30}}>
        <Icon type="material-community" name={type} color={colors.headertext} size={28}
          onPress={()=>{navigation.goBack()}}
        />
      </View>
      <View style={{marginLeft:30}}>
        <Text style={headerStyles.headertext}>{typeof(title)==='undefined'?'':title.toUpperCase()}</Text>
      </View>
    </View>
  );
}
 
export default Header;
import { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "./src/global/GlobalStyles";
import RootNavigator from "./src/navigation/rootNavigator";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'anodiam-regular': require('./assets/fonts/Oxygen-Regular.ttf'),
  'anodiam-bold': require('./assets/fonts/Oxygen-Bold.ttf'),
  'anodiam-light': require('./assets/fonts/Oxygen-Light.ttf')
});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <RootNavigator />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}
 
export default App;
import { StyleSheet } from "react-native";
import { colors, parameters } from "../../global/GlobalStyles";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.statusbar,
    height: parameters.headerheight
  },
  headertext: {
    color: colors.headertext,
    fontSize: 22,
    fontWeight: 'bold'
  }
});
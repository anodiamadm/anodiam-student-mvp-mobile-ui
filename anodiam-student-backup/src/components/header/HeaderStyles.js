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
  },
  authHeader: {
    backgroundColor: colors.statusbar,
    height: 170
  },
  headerLogo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 10
  },
  catchLine: {
    color: colors.headertext,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
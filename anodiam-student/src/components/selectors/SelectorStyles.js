import { StyleSheet } from "react-native";
import { colors, parameters } from "../../global/GlobalStyles";

export const selectorStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center'
  },
  dropdown: {
    backgroundColor: colors.grey5,
    margin: 6,
    height: 50,
    borderColor: colors.grey4,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  }
});
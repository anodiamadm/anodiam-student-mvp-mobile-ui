import { StyleSheet } from "react-native";
import { colors, parameters } from "../../global/GlobalStyles";

export const screenStyles = StyleSheet.create({
  title: {
    color: colors.titletext,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  text2: {
    color: colors.grey3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  text3: {
    color: colors.grey3,
    fontWeight: 'bold',
    fontSize: 20
  },
  text4: {
    color: colors.grey3,
    fontSize: 22,
    fontWeight: 'bold'
  },
  textInput1: {
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    borderRadius: 12,
    margin: 10,
    backgroundColor: colors.grey5,
    padding: 8
  },
  textInput2: {
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    borderRadius: 12,
    margin: 10,
    backgroundColor: colors.grey5,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  styledButton: {
    backgroundColor: colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    // borderWidth: 1,
    // borderBottomColor: colors.buttonborder,
    height: 50,
    // paddingHorizontalg: 20,
    // width: '90%',
    // margin: 20
  },
  buttonTitle: {

  },
  socialicon: {
    borderRadius: 12,
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10
  },
  createbutton: {
    backgroundColor: colors.buttonsecondary,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 40,
    paddingHorizontal: 20
  },
  createbuttontitle: {
    color: colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLightBlue
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLightPink
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLightCreame
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLightgreen
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerheight,
    justifyContent: 'space-between'
  },
  inforow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10
  },
  boardCard: {
    borderRadius: 8,
    backgroundColor: colors.grey4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 5,
    height: 80
  },
  boardCardSelected: {
    borderRadius: 8,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 5,
    height: 80
  },
  boardCardTextSelected: {
    fontWeight: 'bold',
    color: colors.headertext
  },
  boardCardText: {
    fontWeight: 'bold',
    color: colors.grey2
  }
});
import { StyleSheet } from "react-native";
import { colors } from "../../global/GlobalStyles";

export const sectionStyles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4
  },
  image: {
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 150
  },
  courseName: {
    textAlign: 'left',
    margin: 5
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 5,
    borderBottomRightRadius: 12
  },
  averageReview: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3
  },
  totalReviews: {
    color: 'white',
    fontSize: 12
  }
});
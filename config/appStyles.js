import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import cssVariables from "./cssVariables";

const appStyles = {
  text: {
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: cssVariables.fontSize.text,
    color: cssVariables.colors.darkGrey,
  },
  btnText: {
    fontFamily: cssVariables.fontFamily.heavy,
    fontSize: cssVariables.fontSize.text,
    color: cssVariables.colors.darkGrey,
  },
  smHeading: {
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: cssVariables.fontSize.smHeading,
    color: cssVariables.colors.darkGrey,
  },
  heading: {
    fontFamily: cssVariables.fontFamily.light,
    fontSize: cssVariables.fontSize.heading,
    color: cssVariables.colors.darkGrey,
  },
  lgHeading: {
    fontFamily: cssVariables.fontFamily.light,
    fontSize: cssVariables.fontSize.lgHeading,
    color: cssVariables.colors.darkGrey,
  },
};

export default appStyles;

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppCheckBox from "../../../shared/AppCheckBox";
import { DetailsContext } from "../../../context";
import { DetailsProgressbar, updateProgress } from "./shared";

function IdentityScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        {DetailsProgressbar(detailsContext)}
        <AppTextColorCoded
          front="I'm"
          colored=" here"
          rest="to..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.midContainer}>
          <AppCheckBox text="date" style={styles.checkbox} />
          <AppCheckBox
            text="chat and meet new people"
            style={styles.checkbox}
          />
          <AppCheckBox text="see how it goes" style={styles.checkbox} />
        </View>
        <View style={styles.svgWrap}>
          <PurposeScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View>
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              updateProgress(detailsContext, -1);
              navigation.navigate("sexualOrientation");
            }}
          />
          <AppButtonRound
            icon="leftcircle"
            style={styles.navBtn}
            onPress={() => {
              updateProgress(detailsContext, 1);
              navigation.navigate("dob");
            }}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(50),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
});
export default IdentityScreen;
import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../../../config";
import IdentityScreenSvg from "../../../assets/svg/IdentityScreenSvg";
import { DetailsContext } from "../../../context";
import AppDetail from "../../../shared/AppDetail";
// import { updateDetailsApi } from "./shared/index";

function IdentityScreen({ navigation }) {
  const [femaleSelected, setFemaleSelected] = useState({
    btnSelected: styles.btnSelected,
    textSelected: styles.textSelected,
  });
  const [maleSelected, setMaleSelected] = useState({});

  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      //Header
      headerTextColored="You"
      headerTextRest="are a"
      //Svg
      Svgname={IdentityScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavIsPrevious={false}
      botNavOnPressRight={() => {
        let details = detailsContext.details;

        maleSelected.btnSelected
          ? (details.content["identiity"] = "M")
          : (details.content["identiity"] = "F");
        detailsContext.setDetails(details);

        // updateDetailsApi({ sex: details.content["identiity"] });
        console.log("identiity: ", detailsContext.details.content.identiity);
        navigation.navigate("sexualOrientation");
      }}
    >
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[styles.btnLeft, femaleSelected.btnSelected]}
          onPress={() => {
            setMaleSelected({});
            setFemaleSelected({
              btnSelected: styles.btnSelected,
              textSelected: styles.textSelected,
            });
          }}
        >
          <Text
            style={[appStyles.text, styles.text, femaleSelected.textSelected]}
          >
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnRight, maleSelected.btnSelected]}
          onPress={() => {
            setFemaleSelected({});
            setMaleSelected({
              btnSelected: styles.btnSelected,
              textSelected: styles.textSelected,
            });
          }}
        >
          <Text
            style={[appStyles.text, styles.text, maleSelected.textSelected]}
          >
            Male
          </Text>
        </TouchableOpacity>
      </View>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
  },
  btnLeft: {
    borderTopLeftRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: moderateScale(0.7),
    borderBottomWidth: moderateScale(0.7),
    borderLeftWidth: moderateScale(0.7),

    width: moderateScale(120),
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
    elevation: 1,
  },
  btnRight: {
    borderTopRightRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: moderateScale(0.7),
    borderBottomWidth: moderateScale(0.7),
    borderRightWidth: moderateScale(0.7),

    width: moderateScale(120),
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
  },
  text: {
    paddingVertical: verticalScale(10),
    fontFamily: cssVariables.fontFamily.medium,
  },

  btnSelected: {
    borderColor: cssVariables.colors.primary,
    backgroundColor: cssVariables.colors.primary,
  },
  textSelected: {
    color: cssVariables.colors.white,
    fontFamily: cssVariables.fontFamily.heavy,
  },
});
export default IdentityScreen;

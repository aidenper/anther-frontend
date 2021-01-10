import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AccountScreen(props) {
  return (
    <View>
      <Text style={styles.container}>Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeftSide from "./Label/LeftSide";
import RightSide from "./Label/RightSide";

const Label = ({ lang, userInfo, token }) => {
  return (
    <View style={styles.container}>
      <LeftSide lang={lang} userInfo={userInfo} />
      <RightSide lang={lang} token={token} />
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Head = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>Amount/Currency</Text>
      <Text style={[styles.width2, styles.text]}>Date</Text>
      <Text style={[styles.width3, styles.text]}>Done</Text>
      <View style={[styles.width4, styles.text]} />
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: "100%",
  },
  text: {
    color: "#999",
  },
  width1: {
    width: "44%",
  },
  width2: {
    width: "30%",
  },
  width3: {
    width: "17%",
  },
  width4: {
    width: "5%",
  },
});

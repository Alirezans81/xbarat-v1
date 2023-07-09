import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Head = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>Source</Text>
      <Text style={[styles.width2, styles.text]}>Rate</Text>
      <Text style={[styles.width3, styles.text]}>Target</Text>
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
    width: "35%",
    flexDirection: "row",
  },
  width2: {
    width: "25%",
  },
  width3: {
    width: "35%",
    flexDirection: "row",
  },
  width4: {
    width: "5%",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Head = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>Source</Text>
      <Text style={[styles.width2, styles.text]}>Amount</Text>
      <Text style={[styles.width3, styles.text]}>Rate</Text>
      <Text style={[styles.width4, styles.text]}>Target</Text>
      <Text style={[styles.width5, styles.text]}></Text>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    paddingHorizontal: 18,
  },
  text: {
    color: "#999",
  },
  width1: {
    width: "22%",
  },
  width2: {
    width: "22%",
  },
  width3: {
    width: "26%",
  },
  width4: {
    width: "22%",
  },
  width5: {
    width: "8%",
  },
});

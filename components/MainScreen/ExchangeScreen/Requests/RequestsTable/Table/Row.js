import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Row = ({ row }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>{row.quantity}</Text>
      <Text style={[styles.width2, styles.text]}>{row.amount}</Text>
      <Text style={[styles.width3, styles.text]}>{row.rate}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {},
  width1: {
    width: "32%",
  },
  width2: {
    width: "34%",
  },
  width3: {
    width: "34%",
  },
});

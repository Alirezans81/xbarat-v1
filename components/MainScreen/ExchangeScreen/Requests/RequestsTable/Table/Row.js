import { StyleSheet, Text, View } from "react-native";
import React from "react";
import convertNumber from "../../../../../../hooks/convertNumber";

const Row = ({ row }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>
        {convertNumber(row.quantity)}
      </Text>
      <Text style={[styles.width2, styles.text]}>
        {convertNumber(row.amount)}
      </Text>
      <Text style={[styles.width3, styles.text]}>
        {convertNumber(row.rate)}
      </Text>
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

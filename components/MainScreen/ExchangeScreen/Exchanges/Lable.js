import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Lable = ({ lang }) => {
  return (
    <View style={styles.lableView}>
      <Text style={styles.label}>{lang["exchanges-table-label"]}</Text>
    </View>
  );
};

export default Lable;

const styles = StyleSheet.create({
  lableView: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  label: {
    fontSize: 26,
    fontWeight: "300",
  },
});

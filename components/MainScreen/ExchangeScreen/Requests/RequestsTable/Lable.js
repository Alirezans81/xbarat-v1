import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Lable = ({ lang, availableSources }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{availableSources[0].abbreviation}</Text>
      <Text style={styles.label}>{" -> "}</Text>
      <Text style={styles.label}>{availableSources[1].abbreviation}</Text>
    </View>
  );
};

export default Lable;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  label: {
    fontSize: 26,
    fontWeight: "300",
  },
});

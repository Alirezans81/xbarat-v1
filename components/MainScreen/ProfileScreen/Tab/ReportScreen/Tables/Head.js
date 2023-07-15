import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Head = ({ lang }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>
        {lang["amount"] + "/" + lang["currency"]}
      </Text>
      <Text style={[styles.width2, styles.text]}>{lang["date"]}</Text>
      <Text style={[styles.width3, styles.text]}>{lang["status"]}</Text>
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

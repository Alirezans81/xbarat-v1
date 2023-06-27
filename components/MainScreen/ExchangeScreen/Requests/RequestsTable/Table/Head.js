import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Head({ lang }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>{lang["quantity"]}</Text>
      <Text style={[styles.width2, styles.text]}>{lang["amount"]}</Text>
      <Text style={[styles.width3, styles.text]}>{lang["rate"]}</Text>
    </View>
  );
}

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
    width: "32%",
  },
  width2: {
    width: "34%",
  },
  width3: {
    width: "34%",
  },
});

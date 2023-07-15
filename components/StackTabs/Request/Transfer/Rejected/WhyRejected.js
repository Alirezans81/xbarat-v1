import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WhyRejected = ({ lang }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lang["reject-reason-label"]}</Text>
      <Text style={styles.text}>You've uploaded unclear document</Text>
    </View>
  );
};

export default WhyRejected;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingBottom: 30,
    paddingTop: 20,
  },
  label: {
    fontSize: 18,
    color: "#999",
  },
  text: {
    fontSize: 24,
    fontWeight: "300",
  },
});

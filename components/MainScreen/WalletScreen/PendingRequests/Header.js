import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ lang }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lang["pending-requests-label"]}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  label: {
    fontSize: 26,
    fontWeight: "300",
  },
});

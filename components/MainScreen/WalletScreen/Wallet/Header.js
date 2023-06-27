import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Buttons from "./Header/Buttons";

const Header = ({ lang }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lang["wallet-label"]}</Text>
      <Buttons lang={lang} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  label: {
    fontSize: 26,
    fontWeight: "300",
  },
});

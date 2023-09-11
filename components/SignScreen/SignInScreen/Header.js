import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = ({ setSign, lang }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>{lang["login"]}</Text>
      <TouchableOpacity
        onPress={() => {
          setSign("up");
        }}
      >
        <Text style={styles.signupButtonText}>{lang["signup button"]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginText: {
    fontSize: 22,
    fontWeight: "400",
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#1D93FF",
  },
});

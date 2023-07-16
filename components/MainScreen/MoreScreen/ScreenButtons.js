import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ScreenButtons = ({ lang, stackNavigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          stackNavigation.navigate("Help");
        }}
      >
        <Text style={styles.buttonText}>{lang["help"]}</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/App/MainScreen/MoreScreen/go-to.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          stackNavigation.navigate("About Us");
        }}
      >
        <Text style={styles.buttonText}>{lang["about-us"]}</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/App/MainScreen/MoreScreen/go-to.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenButtons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#505050",
    fontWeight: "300",
  },
  img: {
    width: 15,
    height: 15,
  },
});

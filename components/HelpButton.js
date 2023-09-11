import { StyleSheet, Image, View, SafeAreaView, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const HelpButton = ({ navigation, lang }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HelpScreen")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{lang["help-button-text"]}</Text>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../assets/help.png")} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HelpButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: "2%",
    zIndex: 100,
  },
  button: {},
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  imgContainer: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: "#026897",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 35,
    height: 35,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import React from "react";

const Assignment = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/App/Tabs/Request/back.png")}
        style={styles.ImageBackground}
        imageStyle={styles.img}
      >
        <View style={styles.textView}>
          <Image
            style={styles.checkImg}
            source={require("../../../../assets/App/Tabs/Request/check.png")}
          />
          <Text style={styles.text}>Please wait for admin assignment.</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Assignment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ImageBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 160,
  },
  img: {
    borderRadius: 15,
  },
  textView: {
    height: "60%",
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  checkImg: {
    width: 30,
    height: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const WaitText = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../../assets/App/Tabs/Request/wait.png")}
      />
      <Text style={styles.text}>Please wait for admin to pay</Text>
    </View>
  );
};

export default WaitText;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 15,
    marginHorizontal: 40,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "300",
  },
});

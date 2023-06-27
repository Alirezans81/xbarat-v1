import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Buttons = ({ lang }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.depositeButton]}>
        <Image
          resizeMode="cover"
          style={styles.depositeIcon}
          source={require("../../../../../assets/App/MainScreen/WalletScreen/deposite.png")}
        />
        <Text style={styles.depositeButtonText}>
          {lang["deposit-button-text"]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    flexDirection: "row",
  },
  depositeButton: {
    borderColor: "#28CD25",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  withdrawalButton: {
    borderColor: "#E04B4B",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  withdrawalButtonText: {
    color: "#E04B4B",
    fontSize: 16,
    fontWeight: "600",
  },
  depositeButtonText: {
    color: "#28CD25",
    fontSize: 16,
    fontWeight: "600",
  },
  depositeIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
});

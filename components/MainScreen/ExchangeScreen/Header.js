import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = ({ lang }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          resizeMode="contain"
          source={require("../../../assets/App/MainScreen/ExchangeScreen/logo.png")}
        />
        <Text style={styles.logoText}>{lang["xbarat"]}</Text>
      </View>
      <TouchableOpacity style={styles.ordersBtn}>
        <Text style={styles.ordersBtnText}>{lang["orders"]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const logoSize = 60;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImg: {
    width: logoSize,
    height: logoSize,
  },
  logoText: {
    fontSize: 32,
    color: "#FFD072",
  },
  ordersBtn: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  ordersBtnText: {
    fontSize: 20,
    fontWeight: "300",
  },
});

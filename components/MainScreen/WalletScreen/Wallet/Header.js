import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = ({ lang, stackNavigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lang["wallet-label"]}</Text>
      <TouchableOpacity
        onPress={() => {
          stackNavigation.navigate("DepositWithdrawalTransfer", {
            type: "deposit",
          });
        }}
        style={[styles.button, styles.depositeButton]}
      >
        <Image
          resizeMode="cover"
          style={styles.depositeIcon}
          source={require("../../../../assets/App/MainScreen/WalletScreen/deposite.png")}
        />
        <Text style={styles.depositeButtonText}>
          {lang["deposit-button-text"]}
        </Text>
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
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  label: {
    fontSize: 26,
    fontWeight: "300",
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

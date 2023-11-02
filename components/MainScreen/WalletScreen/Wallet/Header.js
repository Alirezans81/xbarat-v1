import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = ({ lang, stackNavigation, getBalances }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lang["wallet-label"]}</Text>
      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={getBalances}>
          <Image
            style={styles.refreshIcon}
            source={require("../../../../assets/App/MainScreen/WalletScreen/refresh.png")}
          />
        </TouchableOpacity>
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
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  depositeIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  refreshIcon: {
    height: 30,
    width: 30,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Buttons = ({ lang, currency, stackNavigation, balances }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          stackNavigation.navigate("DepositWithdrawalTransfer", {
            type: "transfer",
            currency,
            balances,
          });
        }}
        style={[styles.button, styles.transferButton]}
      >
        <Text style={styles.buttonText}>{lang["tranfer"]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          stackNavigation.navigate("DepositWithdrawalTransfer", {
            type: "withdrawal",
            currency,
            balances,
          });
        }}
        style={[styles.button, styles.withrawalButton]}
      >
        <Text style={styles.buttonText}>{lang["withdrawal"]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
    paddingVertical: 10,
    borderRadius: 100,
  },
  transferButton: {
    backgroundColor: "#028BCA",
  },
  withrawalButton: {
    backgroundColor: "#E04B4B",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

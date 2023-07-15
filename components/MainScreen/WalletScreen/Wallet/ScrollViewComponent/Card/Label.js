import { StyleSheet, Text, View } from "react-native";
import React from "react";
import convertNumber from "../../../../../../hooks/convertNumber";

const Label = ({ data, lang }) => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceView}>
        <Text style={styles.balance}>{convertNumber(data.money)}</Text>
        <Text style={styles.currency}>{data.currency}</Text>
      </View>
      <View style={styles.detailsView}>
        <Text style={[styles.detailsText, styles.locked]}>
          {"-" + data.lockedMoney + " " + lang["locked"]}
        </Text>
        <Text style={[styles.detailsText, styles.pending]}>
          {"+" + data.penddingMoney + " " + lang["pending"]}
        </Text>
      </View>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  detailsView: {
    alignItems: "center",
    marginTop: 10,
  },
  balance: {
    fontSize: 26,
    marginHorizontal: 2,
    fontWeight: "300",
  },
  currency: {
    fontSize: 18,
    marginHorizontal: 2,
    paddingBottom: 3,
  },
  detailsText: {
    marginHorizontal: 5,
  },
  locked: {
    color: "#E04B4B",
  },
  pending: {
    color: "#28CD25",
  },
});

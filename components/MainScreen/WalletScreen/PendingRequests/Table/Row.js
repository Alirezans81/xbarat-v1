import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Row = ({ row, stackNavigation }) => {
  let backgroundColor;
  if (row.status === "Rejected") {
    backgroundColor = "#E04B4B";
  } else if (row.status === "Accepted") {
    backgroundColor = "#28CD25";
  } else if (row.status === "WaitingForPayment") {
    backgroundColor = "#03A9F4";
  } else if (row.status === "WaitingForAdministrationApprove") {
    backgroundColor = "#ADADAD";
  }

  return (
    <View style={styles.container}>
      <View style={[styles.width0]}>
        <View style={[styles.circle, { backgroundColor }]} />
      </View>
      <Text style={[styles.width1, styles.text]}>{row.type}</Text>
      <Text style={[styles.width2, styles.text]}>{row.currency}</Text>
      <Text style={[styles.width3, styles.text]}>{row.money}</Text>
      <TouchableOpacity
        onPress={() => stackNavigation.navigate("Request", { data: row })}
        style={[styles.width4, styles.text]}
      >
        <Image
          style={styles.more}
          sizeMode="cover"
          source={require("../../../../../assets/App/MainScreen/WalletScreen/more.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {},
  width0: {
    width: "10%",
    alignItems: "flex-start",
  },
  width1: {
    width: "22%",
  },
  width2: {
    width: "26%",
  },
  width3: {
    width: "34%",
  },
  width4: {
    width: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  more: {
    height: 20,
    width: 20,
  },
});

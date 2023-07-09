import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import convertDate from "../../../../../../hooks/convertDate";

const Row = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.width1, styles.text]}>
        <Text>{data.sourceMoney}</Text>
        <Text style={styles.currency}>{data.sourceCurrency}</Text>
      </View>
      <Text style={[styles.width2, styles.text]}>
        {convertDate(data.createDate)}
      </Text>
      <View style={[styles.width3, styles.text]}>
        <Text>{data.destinationMoney}</Text>
        <Text style={styles.currency}>{data.destinationCurrency}</Text>
      </View>
      <TouchableOpacity style={styles.width4}>
        <Image
          style={styles.moreImg}
          source={require("../../../../../../assets/App/MainScreen/WalletScreen/more.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {},
  width1: {
    width: "35%",
    flexDirection: "row",
  },
  width2: {
    width: "25%",
  },
  width3: {
    width: "35%",
    flexDirection: "row",
  },
  width4: {
    width: "5%",
  },
  currency: {
    marginLeft: 3,
    color: "#999",
  },
  img: {
    width: 20,
    height: 20,
  },
  moreImg: {
    width: 20,
    height: 20,
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import convertDate from "../../../../../../hooks/convertDate";

const Row = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.width1, styles.text]}>
        <Text style={styles.amount}>{data.money}</Text>
        <Text style={styles.currency}>{data.currency}</Text>
      </View>
      <Text style={[styles.width2, styles.text]}>
        {convertDate(data.createDate, "without-time")}
      </Text>
      <View style={styles.width3}>
        <Image
          style={[styles.img]}
          source={
            data.hasFinished
              ? require("../../../../../../assets/App/MainScreen/ProfileScreen/done.png")
              : require("../../../../../../assets/App/MainScreen/ProfileScreen/not-done.png")
          }
        />
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
    width: "44%",
    flexDirection: "row",
  },
  width2: {
    width: "30%",
  },
  width3: {
    width: "17%",
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

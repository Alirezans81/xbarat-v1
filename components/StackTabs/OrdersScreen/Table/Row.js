import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import convertNumber from "../../../../hooks/convertNumber";

const Row = ({ row, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.width1, styles.text]}>
        {row.sourceCurrency.abbreviation}
      </Text>
      <Text style={[styles.width2, styles.text]}>
        {convertNumber(row.sourceMoney)}
      </Text>
      <Text style={[styles.width3, styles.text]}>
        {convertNumber(row.rate)}
      </Text>
      <Text style={[styles.width4, styles.text]}>
        {row.destinationCurrency.abbreviation}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Order Details", { data: row })}
        style={[styles.width5, styles.text]}
      >
        <Image
          source={require("../../../../assets/App/MainScreen/WalletScreen/more.png")}
          style={styles.image}
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
  width1: {
    width: "22%",
  },
  width2: {
    width: "22%",
  },
  width3: {
    width: "26%",
  },
  width4: {
    width: "22%",
  },
  width5: {
    width: "8%",
  },
  image: {
    width: 17,
    height: 17,
  },
});

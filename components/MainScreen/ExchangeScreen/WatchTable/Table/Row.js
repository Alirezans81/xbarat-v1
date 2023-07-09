import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import convertNumber from "../../../../../hooks/convertNumber";

const Row = ({
  row,
  setAvailableSources,
  setSelectedSourceIndex,
  setSource,
  setTarget,
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  const change = (data) => {
    setAvailableSources([data.sourceCurrency, data.destinationCurrency]);
    setSource(data.sourceCurrency);
    setTarget(data.destinationCurrency);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedSourceIndex(0);

        setSelectedIndex(index);

        let data = {};
        data.sourceCurrency = row.sourceCurrency;
        data.destinationCurrency = row.destinationCurrency;

        change(data);
      }}
      disabled={selectedIndex === index}
    >
      <View style={styles.container}>
        <View style={styles.width1} />
        <View style={[styles.width2, styles.text, styles.button]}>
          <View
            style={
              selectedIndex === index
                ? styles.disabledButtonView
                : styles.buttonView
            }
          >
            <Text
              style={
                selectedIndex === index ? styles.textGray : styles.textBlue
              }
            >
              {row.symbol}
            </Text>
          </View>
        </View>
        <Text style={[styles.width3, styles.text]}>
          {convertNumber(Number(row.rate).toFixed(2))}
        </Text>
        <Text style={[styles.width4, styles.text]}>
          {convertNumber(row.low)}
        </Text>
        <Text style={[styles.width5, styles.text]}>
          {convertNumber(row.high)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
  textBlue: {
    color: "#27B7F5",
  },
  textGray: {
    color: "#999",
  },
  button: {
    paddingRight: 8,
  },
  buttonView: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#27B7F5",
    paddingHorizontal: 2,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButtonView: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#999",
    paddingHorizontal: 2,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  width1: {
    width: "12%",
  },
  width2: {
    width: "22%",
  },
  width3: {
    width: "22%",
  },
  width4: {
    width: "22%",
  },
  width5: {
    width: "22%",
  },
});

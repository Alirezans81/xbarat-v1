import { StyleSheet, Text, View } from "react-native";
import React from "react";
import convertNumber from "../../../../../hooks/convertNumber";

const Row = ({ lang, row, availableSources }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftSide}>
          <Text style={styles.title}>{row.title}</Text>
          <Text style={styles.label}>
            {availableSources[0].abbreviation +
              " -> " +
              availableSources[1].abbreviation}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <View style={[styles.rateView, styles.buyRateView]}>
            <Text style={styles.buyLabel}>
              {lang["buy-rate-exchanges"] + ": "}
            </Text>
            <Text style={styles.buyRate}>{convertNumber(row["buyRate"])}</Text>
          </View>
          <View style={[styles.rateView, styles.sellRateView]}>
            <Text styles={styles.sellLabel}>
              {lang["sell-rate-exchanges"] + ": "}
            </Text>
            <Text style={styles.sellRate}>
              {convertNumber(row["sellRate"])}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  label: {
    marginTop: 5,
  },
  rateView: {
    flexDirection: "row",
  },
  buyRateView: {
    marginTop: 5,
  },
  sellRateView: {
    marginTop: 8,
  },
  buyRate: {
    color: "#28CD25",
  },
  sellRate: {
    color: "#E04B4B",
  },
});

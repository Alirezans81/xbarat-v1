import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TableInfo = ({ lang }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.cell, styles.cell1]}>
          <View style={[styles.circle, { backgroundColor: "#28CD25" }]} />
          <Text style={styles.text}>{lang["accepted"]}</Text>
        </View>
        <View style={[styles.cell, styles.cell2]}>
          <View style={[styles.circle, { backgroundColor: "#ADADAD" }]} />
          <Text style={styles.text}>
            {lang["waiting-for-administration-approve"]}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.cell, styles.cell1]}>
          <View style={[styles.circle, { backgroundColor: "#E04B4B" }]} />
          <Text style={styles.text}>{lang["rejected"]}</Text>
        </View>
        <View style={[styles.cell, styles.cell2]}>
          <View style={[styles.circle, { backgroundColor: "#03A9F4" }]} />
          <Text style={styles.text}>{lang["waiting-for-payment"]}</Text>
        </View>
      </View>
    </View>
  );
};

export default TableInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell1: {
    width: "30%",
  },
  cell2: {
    width: "70%",
  },
  cell: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  text: {
    color: "#fff",
  },
});

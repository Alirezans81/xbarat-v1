import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

const Row = ({ row }) => {
  useEffect(() => {
    console.log(row);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.width1} />
      <TouchableOpacity style={[styles.width2, styles.text]}>
        <Text>{row.symbol}</Text>
      </TouchableOpacity>
      <Text style={[styles.width3, styles.text]}>{row.rate}</Text>
      <Text style={[styles.width4, styles.text]}>{row.low}</Text>
      <Text style={[styles.width5, styles.text]}>{row.high}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  text: {
    color: "#000",
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

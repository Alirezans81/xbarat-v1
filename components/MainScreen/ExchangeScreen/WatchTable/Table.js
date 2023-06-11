import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Head from "./Table/Head";
import Row from "./Table/Row";

const Table = ({ lang, watchTableData }) => {
  return (
    <View>
      <Head lang={lang} />
      <View style={styles.line} />
      {watchTableData.map((row, index) => (
        <Row key={index} row={row} lang={lang} />
      ))}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
});

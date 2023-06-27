import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "./Table/Head";
import Row from "./Table/Row";

const Table = ({ lang, data }) => {
  return (
    <View style={styles.container}>
      <Head lang={lang} />
      {data && data.length !== 0 ? <View style={styles.line} /> : null}
      {data.map((row, index) => (
        <View key={index}>
          <Row row={row} />
          {index !== data.length - 1 ? <View style={styles.line} /> : null}
        </View>
      ))}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {},
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
});

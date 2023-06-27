import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Row from "./Table/Row";

const Table = ({ lang, data, availableSources }) => {
  return (
    <View style={styles.container}>
      {data.map((row, index) => (
        <View key={index}>
          <Row lang={lang} row={row} availableSources={availableSources} />
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
    marginHorizontal: 15,
    backgroundColor: "#bbb",
    height: 1,
  },
});

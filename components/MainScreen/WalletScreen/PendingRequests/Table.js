import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Row from "./Table/Row";
import Head from "./Table/Head";

const Table = ({ lang, data }) => {
  console.log(data);
  return (
    <View style={styles.container}>
      {!data || (data && data.length === 0) ? (
        <View style={styles.noDataView}>
          <Text>{lang["no-data"]}</Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <Head lang={lang} />
          <View style={styles.line} />
          {data.map((row, index) => (
            <View key={index}>
              <Row row={row} />
              {index !== data.length - 1 ? <View style={styles.line} /> : null}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#bbb",
    marginBottom: 25,
    minHeight: 230,
  },
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
  noDataView: {
    width: "100%",
    minHeight: 230,
    justifyContent: "center",
    alignItems: "center",
  },
});

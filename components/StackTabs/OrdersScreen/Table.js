import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "./Table/Head";
import Row from "./Table/Row";

const Table = ({ data, navigation }) => {
  if (!data) {
    return (
      <View style={styles.container}>
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>Loading...</Text>
        </View>
      </View>
    );
  } else if (data && data.length !== 0) {
    return (
      <View style={styles.container}>
        <Head />
        {data && data.length !== 0 ? <View style={styles.line} /> : null}
        {data.map((row, index) => (
          <View key={index}>
            <Row navigation={navigation} row={row} />
            {index !== data.length - 1 ? <View style={styles.line} /> : null}
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>No Data!</Text>
        </View>
      </View>
    );
  }
};

export default Table;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: "#999",
    borderRadius: 15,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
  noDataView: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    fontWeight: "300",
  },
});

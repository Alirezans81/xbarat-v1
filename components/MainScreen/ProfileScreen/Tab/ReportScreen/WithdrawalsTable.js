import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "./Tables/Head";
import Row from "./Tables/Row";

const WithdrawalsTable = ({ data, stackNavigation, lang }) => {
  if (!data) {
    return (
      <View style={styles.container}>
        <Head lang={lang} />
        <View style={styles.line} />
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>{lang["loading"]}</Text>
        </View>
      </View>
    );
  } else if (data && data.length !== 0) {
    return (
      <View style={styles.container}>
        <Head lang={lang} />
        <View style={styles.line} />
        {data.map((row, index) => (
          <View key={index}>
            <Row stackNavigation={stackNavigation} data={row} />
            {index !== data.length - 1 ? <View style={styles.line} /> : null}
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Head lang={lang} />
        <View style={styles.line} />
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>{lang["no-data"]}</Text>
        </View>
      </View>
    );
  }
};

export default WithdrawalsTable;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 0.5,
    borderColor: "#999",
    borderRadius: 15,
  },
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
  noDataView: {
    minHeight: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "300",
  },
});

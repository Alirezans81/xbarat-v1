import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Head from "./Table/Head";
import Row from "./Table/Row";

const Table = ({
  lang,
  watchTableData,
  setAvailableSources,
  setSource,
  setTarget,
}) => {
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <View style={styles.container}>
      <Head lang={lang} />
      <View style={styles.line} />
      {watchTableData.length === 0 ? (
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>{lang["loading"]}</Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {watchTableData.map((row, index) => (
            <View key={index}>
              <Row
                index={index}
                row={row}
                setAvailableSources={setAvailableSources}
                setSource={setSource}
                setTarget={setTarget}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              {index !== watchTableData.length - 1 ? (
                <View style={styles.line} />
              ) : null}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  line: {
    backgroundColor: "#bbb",
    width: "100%",
    height: 1,
  },
  noDataView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    paddingVertical: 5,
  },
});

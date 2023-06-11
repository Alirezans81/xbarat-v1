import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import Lable from "./WatchTable/Lable";
import Table from "./WatchTable/Table";

const WatchTable = ({ lang, watchTableData }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
        <Lable lang={lang} />
        <Table lang={lang} watchTableData={watchTableData} />
      </View>
    </ScrollView>
  );
};

export default WatchTable;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  table: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 20,
    minHeight: 300,
  },
});

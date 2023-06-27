import { StyleSheet, View } from "react-native";
import React from "react";
import Lable from "./WatchTable/Lable";
import Table from "./WatchTable/Table";

const WatchTable = ({
  lang,
  watchTableData,
  setAvailableSources,
  setSource,
  setTarget,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Lable lang={lang} />
        <Table
          lang={lang}
          watchTableData={watchTableData}
          setAvailableSources={setAvailableSources}
          setSource={setSource}
          setTarget={setTarget}
        />
      </View>
    </View>
  );
};

export default WatchTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    minHeight: 250,
  },
  table: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 20,
  },
});

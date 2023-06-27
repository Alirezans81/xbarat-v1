import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lable from "./RequestsTable/Lable";
import Table from "./RequestsTable/Table";

const RequestsTable = ({ lang, data, availableSources }) => {
  return (
    <View style={styles.container}>
      {availableSources.length === 0 || !data ? (
        <View style={styles.noDataView}>
          <Text>
            {availableSources.length === 0
              ? lang["choose a symbol"]
              : lang["loading"]}
          </Text>
        </View>
      ) : (
        <>
          <Lable availableSources={availableSources} />
          <Table lang={lang} data={data} />
        </>
      )}
    </View>
  );
};

export default RequestsTable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#bbb",
    marginBottom: 25,
  },
  noDataView: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
});

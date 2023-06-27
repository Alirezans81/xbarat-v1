import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lable from "./Exchanges/Lable";
import Table from "./Exchanges/Table";

const Exchanges = ({ lang, data, availableSources }) => {
  const object = {};

  return (
    <View style={styles.container}>
      <Lable lang={lang} />
      {data.toString() === object.toString() ? (
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>
            {availableSources.length === 0
              ? lang["choose a symbol"]
              : lang["loading"]}
          </Text>
        </View>
      ) : (
        <Table lang={lang} data={data} availableSources={availableSources} />
      )}
    </View>
  );
};

export default Exchanges;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 15,
    minHeight: 250,
    marginBottom: 20,
  },
  noDataView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

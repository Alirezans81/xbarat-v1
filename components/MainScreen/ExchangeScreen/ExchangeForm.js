import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Form from "./ExchangeForm/Form";
import Inventory from "./ExchangeForm/Inventory";

const Exchange = ({
  lang,
  availableSources,
  availableSourcesRef,
  swap,
  exchange,
  source,
  inventory,
  selectedSourceIndex,
  setSelectedSourceIndex,
  stackNavigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {source ? (
          <Inventory lang={lang} source={source} inventory={inventory} />
        ) : null}
        <Form
          selectedIndex={selectedSourceIndex}
          setSelectedIndex={setSelectedSourceIndex}
          lang={lang}
          availableSources={availableSources}
          availableSourcesRef={availableSourcesRef}
          swap={swap}
          exchange={exchange}
          stackNavigation={stackNavigation}
        />
      </View>
    </View>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  table: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

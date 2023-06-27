import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RequestsTable from "./Requests/RequestsTable";

const Requests = ({ lang, requestsData, availableSources }) => {
  return (
    <View style={styles.container}>
      <RequestsTable
        lang={lang}
        availableSources={availableSources}
        data={requestsData.sourceToDestination}
      />
      <RequestsTable
        lang={lang}
        availableSources={availableSources}
        data={requestsData.destinationToSource}
      />
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

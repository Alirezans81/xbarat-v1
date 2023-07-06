import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Card from "./ScrollViewComponent/Card";

const ScrollViewComponent = ({ lang, data, stackNavigation }) => {
  if (data && data.length !== 0) {
    return (
      <ScrollView
        horizontal={true}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((e, index) => (
          <Card
            key={index}
            data={e}
            balances={data}
            lang={lang}
            stackNavigation={stackNavigation}
          />
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View style={[styles.container, styles.noDataView]}>
        <Text style={styles.noDataText}>
          {data && data.length === 0 ? lang["no-data"] : lang["loading"]}
        </Text>
      </View>
    );
  }
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "100%",
    height: 290,
  },
  noDataView: {
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "300",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
});

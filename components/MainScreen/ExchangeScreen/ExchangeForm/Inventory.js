import { StyleSheet, Text, View } from "react-native";
import React from "react";
import convertNumber from "../../../../hooks/convertNumber";

const Inventory = ({ lang, source, inventory }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inventory}>
        <Text style={styles.text}>{convertNumber(inventory)}</Text>
        <Text style={styles.currency}>{source}</Text>
      </View>
      <Text style={styles.text}> {lang["available"]}.</Text>
    </View>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  inventory: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
  },
  currency: {
    marginLeft: 2,
    paddingBottom: 1,
    fontWeight: "300",
    color: "#999",
  },
});

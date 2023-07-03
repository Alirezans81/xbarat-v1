import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const TopButtonTabs = ({ type, setType }) => {
  return (
    <ScrollView style={styles.container} horizontal>
      <TouchableOpacity
        style={type === "open" ? styles.enabledButton : styles.disabledButton}
        disabled={type === "open"}
        onPress={() => setType("open")}
      >
        <Text
          style={
            type === "open"
              ? styles.enabledButtonText
              : styles.disabledButtonText
          }
        >
          Open Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={type === "done" ? styles.enabledButton : styles.disabledButton}
        disabled={type === "done"}
        onPress={() => setType("done")}
      >
        <Text
          style={
            type === "done"
              ? styles.enabledButtonText
              : styles.disabledButtonText
          }
        >
          Done Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={type === "today" ? styles.enabledButton : styles.disabledButton}
        disabled={type === "today"}
        onPress={() => setType("today")}
      >
        <Text
          style={
            type === "today"
              ? styles.enabledButtonText
              : styles.disabledButtonText
          }
        >
          Today Orders
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TopButtonTabs;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: "#eee",
  },
  enabledButton: {
    marginHorizontal: 8,
    backgroundColor: "#03A9F4",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 100,
  },
  enabledButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  disabledButton: {
    marginHorizontal: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 100,
  },
  disabledButtonText: {
    color: "#888",
    fontWeight: "500",
  },
});

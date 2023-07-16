import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const TopButtonTabs = ({ type, setType, lang }) => {
  return (
    <View>
      <ScrollView style={styles.container} horizontal>
        <TouchableOpacity
          style={
            type === "deposit" ? styles.enabledButton : styles.disabledButton
          }
          disabled={type === "deposit"}
          onPress={() => setType("deposit")}
        >
          <Text
            style={
              type === "deposit"
                ? styles.enabledButtonText
                : styles.disabledButtonText
            }
          >
            {lang["deposits"]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            type === "withdrawal" ? styles.enabledButton : styles.disabledButton
          }
          disabled={type === "withdrawal"}
          onPress={() => setType("withdrawal")}
        >
          <Text
            style={
              type === "withdrawal"
                ? styles.enabledButtonText
                : styles.disabledButtonText
            }
          >
            {lang["withdrawals"]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            type === "transfer" ? styles.enabledButton : styles.disabledButton
          }
          disabled={type === "transfer"}
          onPress={() => setType("transfer")}
        >
          <Text
            style={
              type === "transfer"
                ? styles.enabledButtonText
                : styles.disabledButtonText
            }
          >
            {lang["transfers"]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            type === "exchange" ? styles.enabledButton : styles.disabledButton
          }
          disabled={type === "exchange"}
          onPress={() => setType("exchange")}
        >
          <Text
            style={
              type === "exchange"
                ? styles.enabledButtonText
                : styles.disabledButtonText
            }
          >
            {lang["exchanges"]}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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

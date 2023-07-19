import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import convertNumber from "../../../hooks/convertNumber";
import convertDate from "../../../hooks/convertDate";

const DepositWithdrawalTransferDetails = ({ data, lang }) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.col12}>
            <Text style={styles.label}>{lang["code"]}</Text>
            <Text style={styles.text}>{data.code}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.col6}>
              <Text style={styles.label}>{lang["currency"]}</Text>
              <Text style={styles.text}>{data.currency}</Text>
            </View>
            <View style={styles.col6}>
              <Text style={styles.label}>{lang["amount"]}</Text>
              <Text style={styles.text}>{convertNumber(data.money)}</Text>
            </View>
          </View>
          <View style={styles.col12}>
            <Text style={styles.label}>{lang["date"]}</Text>
            <Text style={styles.text}>
              {convertDate(data.createDate, "not-break")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DepositWithdrawalTransferDetails;

const styles = StyleSheet.create({
  scrollViewContainer: {},
  outerContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  innerContainer: {
    width: "80%",
    alignItems: "center",
    marginLeft: "12%",
  },
  row: {
    flexDirection: "row",
  },
  col12: {
    width: "100%",
    marginVertical: 20,
  },
  col6: {
    width: "50%",
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    color: "#999",
    fontWeight: "300",
  },
  text: {
    fontSize: 28,
  },
});

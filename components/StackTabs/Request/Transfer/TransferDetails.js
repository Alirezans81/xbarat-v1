import { StyleSheet, Text, View } from "react-native";
import React from "react";
import convertNumber from "../../../../hooks/convertNumber";
import convertDate from "../../../../hooks/convertDate";

const TransferDetails = ({ data, lang }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.elementView}>
          <Text style={styles.label}>{lang["type"]}</Text>
          <Text style={styles.text}>{data.type}</Text>
        </View>
        <View style={styles.elementView}>
          <Text style={styles.label}>{lang["destination"]}</Text>
          <Text style={styles.text}>{data.personCode}</Text>
        </View>
      </View>
      <View>
        <View style={styles.elementView}>
          <Text style={styles.label}>
            {lang["amount"] + "/" + lang["currency"]}
          </Text>
          <View style={styles.amountCurrencyView}>
            <Text style={[styles.text, styles.amount]}>
              {convertNumber(data.money)}
            </Text>
            <Text style={[styles.text, styles.currency]}>{data.currency}</Text>
          </View>
        </View>
        <View style={styles.elementView}>
          <Text style={styles.label}>{lang["date"]}</Text>
          <Text style={styles.text}>{convertDate(data.createDate)}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransferDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  elementView: {
    height: 100,
    maxWidth: 150,
  },
  label: {
    fontSize: 18,
    color: "#999",
    fontWeight: "300",
  },
  text: {
    fontSize: 24,
    marginTop: 3,
  },
  amountCurrencyView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  amount: {},
  currency: {
    marginLeft: 3,
    color: "#999",
  },
});

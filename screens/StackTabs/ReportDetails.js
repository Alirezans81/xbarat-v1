import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DepositWithdrawalTransferDetails from "../../components/StackTabs/ReportDetails/DepositWithdrawalTransferDetails";
import ExchangeDetails from "../../components/StackTabs/ReportDetails/ExchangeDetails";

const ReportDetails = ({ route, navigation }) => {
  const { data } = route.params;

  if (data && data.money) {
    return (
      <View>
        <DepositWithdrawalTransferDetails data={data} />
      </View>
    );
  } else if (data && !data.money) {
    return (
      <View>
        <ExchangeDetails data={data} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Something wrong!</Text>
      </View>
    );
  }
};

export default ReportDetails;

const styles = StyleSheet.create({});

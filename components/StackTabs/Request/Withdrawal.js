import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WithdrawalStatus from "./Withdrawal/WithdrawalStatus";

const Withdrawal = ({ data }) => {
  return (
    <View>
      <WithdrawalStatus status={data.status} />
      <Text>Withdrawal</Text>
    </View>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({});

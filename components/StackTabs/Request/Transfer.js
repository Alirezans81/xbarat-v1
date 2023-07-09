import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransferStatus from "./Transfer/TransferStatus";

const Transfer = ({ data }) => {
  return (
    <View>
      <TransferStatus status={data.status} />
      <Text>Transfer</Text>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({});

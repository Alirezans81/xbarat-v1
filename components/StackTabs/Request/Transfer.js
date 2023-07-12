import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransferStatus from "./Transfer/TransferStatus";
import TransferDetails from "./Transfer/TransferDetails";
import WaitText from "./Transfer/New/WaitText";
import WhyRejected from "./Transfer/Rejected/WhyRejected";

const Transfer = ({ data }) => {
  if (data.status === "New") {
    return (
      <View>
        <TransferStatus status={data.status} />
        <TransferDetails data={data} />
        <WaitText />
      </View>
    );
  } else if (data.status === "Accepted") {
    return (
      <View>
        <TransferStatus status={data.status} />
        <TransferDetails data={data} />
      </View>
    );
  } else if (data.status === "Rejected") {
    return (
      <View>
        <TransferStatus status={data.status} />
        <TransferDetails data={data} />
        <WhyRejected />
      </View>
    );
  }
};

export default Transfer;

const styles = StyleSheet.create({});

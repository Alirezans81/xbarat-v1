import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransferStatus from "./Transfer/TransferStatus";
import TransferDetails from "./Transfer/TransferDetails";
import WaitText from "./Transfer/New/WaitText";
import WhyRejected from "./Transfer/Rejected/WhyRejected";

const Transfer = ({ data, lang }) => {
  if (data.status === "New") {
    return (
      <View>
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
        <WaitText lang={lang} />
      </View>
    );
  } else if (data.status === "Accepted") {
    return (
      <View>
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
      </View>
    );
  } else if (data.status === "Rejected") {
    return (
      <View>
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
        <WhyRejected lang={lang} />
      </View>
    );
  }
};

export default Transfer;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Forms from "../../components/StackTabs/DepositWithdrawalTransferScreen/Forms";

const DepositWithdrawalTransferScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Forms route={route} />
    </View>
  );
};

export default DepositWithdrawalTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

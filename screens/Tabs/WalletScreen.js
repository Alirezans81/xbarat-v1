import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Wallet from "../../components/MainScreen/WalletScreen/Wallet";
import PendingRequests from "../../components/MainScreen/WalletScreen/PendingRequests";

const WalletScreen = ({
  lang,
  token,
  refreshToken,
  balances,
  getBalances,
  stackNavigation,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Wallet
        lang={lang}
        balances={balances}
        getBalances={getBalances}
        stackNavigation={stackNavigation}
      />
      <PendingRequests
        lang={lang}
        token={token}
        refreshToken={refreshToken}
        stackNavigation={stackNavigation}
      />
    </ScrollView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

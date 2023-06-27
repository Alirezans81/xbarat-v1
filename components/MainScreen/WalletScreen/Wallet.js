import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "./Wallet/Header";
import ScrollViewComponent from "./Wallet/ScrollViewComponent";

const Wallet = ({ balances, lang }) => {
  return (
    <View style={styles.container}>
      <Header lang={lang} />
      <ScrollViewComponent lang={lang} data={balances} />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {},
});

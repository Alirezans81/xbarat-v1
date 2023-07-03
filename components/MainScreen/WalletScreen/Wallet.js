import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "./Wallet/Header";
import ScrollViewComponent from "./Wallet/ScrollViewComponent";

const Wallet = ({ balances, lang, stackNavigation }) => {
  return (
    <View style={styles.container}>
      <Header lang={lang} stackNavigation={stackNavigation} />
      <ScrollViewComponent
        lang={lang}
        data={balances}
        stackNavigation={stackNavigation}
      />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {},
});

import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import TabNavigator from "../components/TabNavigator";

const MainScreen = ({
  lang,
  setLang,
  token,
  refreshToken,
  navigation,
  setLoggedIn,
  balances,
  getBalances,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator
        lang={lang}
        setLang={setLang}
        token={token}
        refreshToken={refreshToken}
        stackNavigation={navigation}
        setLoggedIn={setLoggedIn}
        balances={balances}
        getBalances={getBalances}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

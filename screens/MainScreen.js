import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import TabNavigator from "../components/TabNavigator";

const MainScreen = ({ lang, setLang, token, refreshToken }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator
        lang={lang}
        setLang={setLang}
        token={token}
        refreshToken={refreshToken}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

import { Text, StyleSheet, View } from "react-native";
import React from "react";
import TopBar from "../../components/MainScreen/MoreScreen/TopBar";
import ScreenButtons from "../../components/MainScreen/MoreScreen/ScreenButtons";

const MoreScreen = ({ setLang, setLoggedIn, lang, stackNavigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TopBar setLang={setLang} setLoggedIn={setLoggedIn} lang={lang} />
        <ScreenButtons lang={lang} stackNavigation={stackNavigation} />
      </View>
      <View style={styles.bottomSignView}>
        <Text style={styles.bottomSign}>{lang["bottom-sign"]}</Text>
      </View>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  buttonView: {
    paddingTop: "8%",
  },
  button: {
    borderWidth: 1,
    borderColor: "#E04B4B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#E04B4B",
  },
  bottomSignView: {
    alignItems: "center",
    paddingVertical: 20,
  },
  bottomSign: {
    color: "#999",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Language from "../../components/Language";

const MoreScreen = ({ setLang, setLoggedIn, lang }) => {
  return (
    <View style={styles.container}>
      <Language setLang={setLang} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => setLoggedIn(false)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{lang["log-out"]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
});

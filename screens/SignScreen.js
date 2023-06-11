import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import SignInScreen from "./SignScreen/SignInScreen";
import SignUpScreen from "./SignScreen/SignUpScreen";
import Language from "../components/Language";

const SignScreen = ({ lang, setLang, setLoggedIn,setToken }) => {
  const [sign, setSign] = useState("in");

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        resizeMode="cover"
        source={require("../assets/SignScreenBackground.png")}
      />
      <Language setLang={setLang} />
      {sign === "in" ? (
        <SignInScreen
          setSign={setSign}
          lang={lang}
          setLang={setLang}
          setLoggedIn={setLoggedIn}
          setToken={setToken}
        />
      ) : (
        <SignUpScreen
          setSign={setSign}
          lang={lang}
          setLang={setLang}
          setLoggedIn={setLoggedIn}
        />
      )}
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

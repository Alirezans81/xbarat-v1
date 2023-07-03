import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Loader from "react-native-modal-loader";
import SignInScreen from "./SignScreen/SignInScreen";
import SignUpScreen from "./SignScreen/SignUpScreen";
import Language from "../components/Language";

const SignScreen = ({ lang, setLang, setLoggedIn, setToken }) => {
  const [sign, setSign] = useState("in");

  const backgroundImg = require("../assets/SignScreenBackground.png");

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loadingSpinner} color="#03A9F4" />
      <Image
        style={styles.backgroundImg}
        resizeMode="cover"
        source={backgroundImg}
      />
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Language setLang={setLang} />
        {sign === "in" ? (
          <SignInScreen
            setSign={setSign}
            lang={lang}
            setLang={setLang}
            setLoggedIn={setLoggedIn}
            setToken={setToken}
            setLoadingSpinner={setLoadingSpinner}
          />
        ) : (
          <SignUpScreen
            setSign={setSign}
            lang={lang}
            setLang={setLang}
            setLoggedIn={setLoggedIn}
            setLoadingSpinner={setLoadingSpinner}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  KeyboardAvoidingView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

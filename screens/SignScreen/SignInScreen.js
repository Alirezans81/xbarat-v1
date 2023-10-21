import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/SignScreen/SignInScreen/Header";
import SignInForm from "../../components/SignScreen/SignInScreen/SignInForm";

const SignInScreen = ({
  setSign,
  lang,
  setLoggedIn,
  setToken,
  setLoadingSpinner,
  storeAccessToken,
}) => {
  return (
    <View style={styles.container}>
      <Header setSign={setSign} lang={lang} />
      <SignInForm
        setLoggedIn={setLoggedIn}
        lang={lang}
        setToken={setToken}
        setLoadingSpinner={setLoadingSpinner}
        storeAccessToken={storeAccessToken}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "70%",
    maxWidth: 350,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

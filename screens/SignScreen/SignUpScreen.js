import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/SignScreen/SignUpScreen/Header";
import SignUpForm from "../../components/SignScreen/SignUpScreen/SignUpForm";

const SignUpScreen = ({ setSign, lang, setLoggedIn, setLoadingSpinner }) => {
  return (
    <View style={styles.container}>
      <Header setSign={setSign} lang={lang} />
      <SignUpForm
        setSign={setSign}
        setLoggedIn={setLoggedIn}
        lang={lang}
        setLoadingSpinner={setLoadingSpinner}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "70%",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

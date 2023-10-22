import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/SignScreen/SignInScreen/Header";
import SignInForm from "../../components/SignScreen/SignInScreen/SignInForm";
import ForgotPasswordForm from "../../components/SignScreen/SignInScreen/ForgotPasswordForm";

const SignInScreen = ({
  setSign,
  lang,
  setLoggedIn,
  setToken,
  setLoadingSpinner,
  storeAccessToken,
}) => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Header setSign={setSign} lang={lang} />
      {forgotPassword ? (
        <ForgotPasswordForm
          setForgotPassword={setForgotPassword}
          lang={lang}
          setLoadingSpinner={setLoadingSpinner}
        />
      ) : (
        <SignInForm
          setLoggedIn={setLoggedIn}
          lang={lang}
          setToken={setToken}
          setLoadingSpinner={setLoadingSpinner}
          storeAccessToken={storeAccessToken}
          setForgotPassword={setForgotPassword}
        />
      )}
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

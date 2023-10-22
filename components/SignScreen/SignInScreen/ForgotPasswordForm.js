import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const ForgotPasswordForm = ({ lang, setForgotPassword, setLoadingSpinner }) => {
  const [emailError, setEmailError] = useState(false);
  const checkEmail = (values) => {
    if (values.email === "") setEmailError(true);
    else setEmailError(false);

    return !emailError;
  };

  const [errors, setErrors] = useState([]);
  const sendForgotPasswordEmail = async (email) => {
    const api = require("../../../assets/api.json");
    setLoadingSpinner(true);
    await axios
      .post(api["forgot-password"], { email })
      .then((result) => {
        setLoadingSpinner(false);
        setForgotPassword(false);
      })
      .catch((error) => {
        setLoadingSpinner(false);
        console.log(JSON.stringify(error));
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          if (checkEmail(values) && values.email !== "") {
            sendForgotPasswordEmail(values.email);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Text style={styles.forgotPasswordMessage}>
              {lang["forgot-password-message-1st"] + "."}
            </Text>
            <Text style={styles.forgotPasswordMessage}>
              {lang["forgot-password-message-2nd"] + "."}
            </Text>
            <TextInput
              name="email"
              placeholder={lang["email"]}
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={() => {
                handleBlur("email");
                checkEmail(values);
              }}
              value={values.email}
              keyboardType="email-address"
              textAlign="left"
              autoCapitalize="none"
              autoComplete="email"
            />
            <Text
              style={[styles.error, emailError ? styles.show : styles.hide]}
            >
              {lang["enter your email error"]}
            </Text>
            {errors.map((error) => (
              <Text>{error}</Text>
            ))}
            <TouchableOpacity
              style={styles.backToLoginButton}
              onPress={() => setForgotPassword(false)}
            >
              <Text style={styles.backToLoginButtonText}>
                {lang["back-to-login"]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>{lang["submit"]}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "",
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#03A9F4",
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: -10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  error: {
    color: "#E04B4B",
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  forgotPasswordMessage: {
    marginBottom: 7,
  },
  backToLoginButton: {
    marginTop: 7,
  },
  backToLoginButtonText: {
    color: "#03A9F4",
  },
});

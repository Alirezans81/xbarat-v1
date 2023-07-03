import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignUpForm = ({ lang, setSign, setLoadingSpinner }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const checkEmail = (values) => {
    if (values.email === "") setEmailError(true);
    else setEmailError(false);

    return !emailError;
  };

  const [passwordError, setPasswordError] = useState(false);
  const checkPassword = (values) => {
    if (values.password === "") setPasswordError(true);
    else setPasswordError(false);

    return !passwordError;
  };

  const [passwordCheck, setPasswordCheck] = useState(true);
  const checkConfirmPassword = (values) => {
    if (values.confirmPassword !== values.password && values.password !== "") {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }

    return passwordCheck;
  };

  const signup = async (email, password, confirmPassword) => {
    const api = require("../../../assets/api.json");
    setLoadingSpinner(true);
    await axios
      .post(api["signup"], {
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        setLoadingSpinner(false);
        console.log(result.data);
      })
      .catch((error) => {
        setLoadingSpinner(false);
        console.log(JSON.stringify(error));
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => {
          if (
            checkEmail(values) &&
            checkPassword(values) &&
            checkConfirmPassword(values)
          ) {
            signup(values.email, values.password, values.confirmPassword);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
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
            />
            <Text
              style={[styles.error, emailError ? styles.show : styles.hide]}
            >
              {lang["enter your email error"]}
            </Text>
            <TextInput
              name="password"
              placeholder={lang["password"]}
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={() => {
                handleBlur("password");
                checkPassword(values);
              }}
              value={values.password}
              secureTextEntry
              textAlign="left"
            />
            <Text
              style={[styles.error, passwordError ? styles.show : styles.hide]}
            >
              {lang["enter the password error"]}
            </Text>
            <TextInput
              name="confirmPassword"
              placeholder={lang["confirm password"]}
              style={styles.textInput}
              onChangeText={handleChange("confirmPassword")}
              onBlur={() => {
                handleBlur("confirmPassword");
                checkConfirmPassword(values);
              }}
              value={values.confirmPassword}
              secureTextEntry
              textAlign="left"
            />
            <Text
              style={[
                styles.error,
                !passwordCheck ? styles.enabled : styles.disabled,
              ]}
            >
              {lang["password match error"]}
            </Text>
            <View style={styles.acceptTermsContainer}>
              <View style={styles.acceptTermsView}>
                <TouchableOpacity
                  onPress={() => {
                    setAcceptTerms(!acceptTerms);
                    setSubmitEnabled(!submitEnabled);
                  }}
                  style={[
                    styles.Checkbox,
                    acceptTerms
                      ? styles.CheckboxEnabled
                      : styles.CheckboxDisabled,
                  ]}
                />
                <TouchableOpacity style={styles.acceptTermsButton}>
                  <Text style={styles.acceptTermsText}>
                    {lang["i aggree with all "]}
                  </Text>
                  <Text style={[styles.acceptTermsText, styles.textBlue]}>
                    {lang["terms"]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              disabled={!submitEnabled}
              style={submitEnabled ? styles.button : styles.disabledButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>{lang["submit"]}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

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
  disabledButton: {
    width: "100%",
    backgroundColor: "#ccc",
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
  acceptTermsContainer: {
    position: "absolute",
    bottom: -80,
    width: "100%",
    alignItems: "center",
  },
  acceptTermsView: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    borderRadius: 100,
    marginLeft: "5%",
    height: 40,
  },
  acceptTermsButton: {
    flexDirection: "row",
    marginLeft: 8,
  },
  Checkbox: {
    borderRadius: 200,
    marginRight: Platform === "ios" ? 10 : 0,
    height: 22,
    width: 22,
  },
  CheckboxEnabled: {
    backgroundColor: "#03A9F4",
  },
  CheckboxDisabled: {
    backgroundColor: "#ddd",
  },
  acceptTermsText: {
    fontSize: 16,
  },
  textBlue: {
    color: "#03A9F4",
  },
  enabled: {},
  disabled: {
    display: "none",
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
});

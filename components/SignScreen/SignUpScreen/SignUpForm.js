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

const SignUpForm = ({ lang, setSign, setLoadingSpinner }) => {
  const [step, setStep] = useState("enter-email");

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

  const [otpError, setOtpError] = useState(false);
  const checkOTP = (values) => {
    if (values.otp !== "") {
      setOtpError(false);
    } else {
      setOtpError(true);
    }

    return !otpError;
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

  const api = require("../../../assets/api.json");

  const sendOTP = async (email) => {
    setLoadingSpinner(true);
    await axios
      .post(api["send-otp"], { email, code: "", checkTerms: true })
      .then((result) => {
        setStep("enter-otp");
        setLoadingSpinner(false);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        setLoadingSpinner(false);
      });
  };

  const verifyOTP = async (email, code) => {
    setLoadingSpinner(true);
    await axios
      .post(api["verify-otp"], { email, code })
      .then((result) => {
        setStep("enter-password");
        setLoadingSpinner(false);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        setLoadingSpinner(false);
      });
  };

  const signup = async (email, password, confirmPassword) => {
    if (password === confirmPassword && password !== "") {
      setLoadingSpinner(true);
      await axios
        .post(api["signup"], { email, password, confirmPassword })
        .then((result) => {
          setLoadingSpinner(false);
          setSign("in");
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          setLoadingSpinner(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          otp: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          if (step === "enter-email") {
            sendOTP(values.email);
          } else if (step === "enter-otp") {
            verifyOTP(values.email, values.otp);
          } else if (step === "enter-password") {
            signup(values.email, values.password, values.confirmPassword);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            {step === "enter-email" && (
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
              </>
            )}

            {step === "enter-otp" && (
              <>
                <TextInput
                  name="otp"
                  placeholder={lang["otp"]}
                  style={styles.textInput}
                  onChangeText={handleChange("otp")}
                  onBlur={() => {
                    handleBlur("otp");
                    checkOTP(values);
                  }}
                  value={values.otp}
                  textAlign="left"
                />
                <Text style={styles.spamWarning}>
                  {lang["spam-check-warning"]}
                </Text>
                <Text
                  style={[styles.error, otpError ? styles.show : styles.hide]}
                >
                  {lang["enter the otp error"]}
                </Text>
              </>
            )}

            {step === "enter-password" && (
              <>
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
                  style={[
                    styles.error,
                    passwordError ? styles.show : styles.hide,
                  ]}
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
              </>
            )}
            {step === "enter-email" && (
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
            )}
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
    width: "90%",
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
  spamWarning: {
    color: "#F99417",
  },
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

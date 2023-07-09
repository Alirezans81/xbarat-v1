import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const SignInForm = ({ lang, setLoggedIn, setToken, setLoadingSpinner }) => {
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

  const [errors, setErrors] = useState([]);
  const signin = async (email, password) => {
    const api = require("../../../assets/api.json");
    setLoadingSpinner(true);
    await axios
      .post(api["login"], { email, password })
      .then((result) => {
        setLoadingSpinner(false);
        setToken(result.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoadingSpinner(false);
        console.log(JSON.stringify(error));
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "sina1@gmail.com", password: "test_s_1" }}
        onSubmit={(values) => {
          if (checkEmail(values) && checkPassword(values)) {
            signin(values.email, values.password);
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
            {errors.map((error) => (
              <Text>{error}</Text>
            ))}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>{lang["submit"]}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignInForm;

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
});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import addComma from "../../../hooks/addComma";

const DepositForm = ({
  currencies,
  navigation,
  lang,
  token,
  setLoadingSpinner,
  refreshToken,
}) => {
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState();

  const [locations, setLocations] = useState();
  useEffect(() => {
    selectedCurrencyIndex &&
      currencies[selectedCurrencyIndex] &&
      setLocations(currencies[selectedCurrencyIndex].counteries);
  }, [selectedCurrencyIndex]);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState();
  const loactionDropdownRef = useRef();
  useEffect(() => {
    loactionDropdownRef.current.reset();
    setSelectedLocationIndex(null);
  }, [locations]);

  const api = require("../../../assets/api.json");
  const deposit = async (amount, currencyId, countryId) => {
    if (refreshToken()) {
      const param = {
        amount: +amount.replaceAll(",", ""),
        countryId,
        currencyId,
      };
      const config = {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      };

      setLoadingSpinner(true);
      await axios
        .post(api["deposit"], param, config)
        .then((result) => {
          setLoadingSpinner(false);
          navigation.goBack();
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
        initialValues={{ amount: "" }}
        onSubmit={(values) => {
          if (
            currencies[selectedCurrencyIndex] &&
            locations[selectedLocationIndex] &&
            values.amount !== 0
          ) {
            deposit(
              values.amount,
              currencies[selectedCurrencyIndex].id,
              locations[selectedLocationIndex].countryId
            );
          }
        }}
      >
        {({ handleBlur, handleChange, values, handleSubmit }) => (
          <>
            <SelectDropdown
              data={currencies && currencies.map((e) => e.abbreviation)}
              defaultButtonText={lang["select-currency-placeholder"]}
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownButtonText}
              dropdownStyle={styles.dropdown}
              selectedRowStyle={styles.dropdownSelectedRow}
              selectedRowTextStyle={styles.dropdownSelectedRowText}
              onSelect={(e, index) => setSelectedCurrencyIndex(index)}
            />
            <TextInput
              onBlur={handleBlur("amount")}
              onChangeText={handleChange("amount")}
              value={addComma(values.amount)}
              placeholder={lang["input-amount-placeholder"]}
              style={styles.input}
              keyboardType="numeric"
            />
            <SelectDropdown
              ref={loactionDropdownRef}
              data={locations && locations.map((e) => e.title)}
              disabled={!selectedCurrencyIndex}
              defaultButtonText={lang["select-location-placeholder"]}
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownButtonText}
              dropdownStyle={styles.dropdown}
              selectedRowStyle={styles.dropdownSelectedRow}
              selectedRowTextStyle={styles.dropdownSelectedRowText}
              onSelect={(e, index) => setSelectedLocationIndex(index)}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>{lang["submit"]}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default DepositForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  dropdownButton: {
    width: "70%",
    borderWidth: 0.5,
    borderColor: "#999",
    borderRadius: 15,
    marginVertical: 20,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
  },
  dropdownButtonText: {
    fontSize: 16,
    fontWeight: "300",
  },
  dropdown: {
    borderRadius: 15,
  },
  dropdownSelectedRow: {
    backgroundColor: "#03A9F4",
  },
  dropdownSelectedRowText: {
    color: "#fff",
  },
  input: {
    width: "70%",
    textAlign: "center",
    borderWidth: 0.5,
    borderRadius: 15,
    paddingVertical: 15,
    borderColor: "#999",
    fontSize: 18,
  },
  KeyboardAvoidingView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    width: "70%",
    backgroundColor: "#03A9F4",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 15,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

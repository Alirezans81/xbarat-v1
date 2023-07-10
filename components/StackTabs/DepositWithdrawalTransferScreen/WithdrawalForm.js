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
import Inventory from "../../MainScreen/ExchangeScreen/ExchangeForm/Inventory";

const WithdrawalForm = ({
  currencies,
  currency,
  balances,
  lang,
  navigation,
}) => {
  const [inventory, setInventory] = useState();
  const [internalCurrencies, setInternalCurrencies] = useState([]);
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState();
  const currenyDropdownRef = useRef();
  const [locations, setLocations] = useState([]);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState();
  const loactionDropdownRef = useRef();

  useEffect(() => {
    setInternalCurrencies(currencies);
  }, [currencies]);
  useEffect(() => {
    if (internalCurrencies && currency) {
      const foundIndex = internalCurrencies.findIndex(
        (e) => e.abbreviation === currency
      );
      setSelectedCurrencyIndex(foundIndex);
      currenyDropdownRef.current.selectIndex(foundIndex);
    }
  }, [internalCurrencies]);
  const findInventory = () => {
    if (internalCurrencies[selectedCurrencyIndex]) {
      const found = balances.find(
        (e) =>
          e.currency === internalCurrencies[selectedCurrencyIndex].abbreviation
      );
      setInventory(found);
    }
  };
  useEffect(() => {
    selectedCurrencyIndex &&
      internalCurrencies[selectedCurrencyIndex] &&
      setLocations(internalCurrencies[selectedCurrencyIndex].counteries);
    findInventory();
  }, [selectedCurrencyIndex]);
  useEffect(() => {
    loactionDropdownRef.current.reset();
    setSelectedLocationIndex(null);
  }, [locations]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ amount: "", destination: "" }}
        onSubmit={(values) => {
          navigation.goBack();
        }}
      >
        {({ handleBlur, handleChange, values, handleSubmit }) => (
          <>
            {internalCurrencies[selectedCurrencyIndex] && (
              <View>
                <Inventory
                  inventory={inventory ? inventory.money : 0}
                  source={
                    internalCurrencies[selectedCurrencyIndex]
                      ? internalCurrencies[selectedCurrencyIndex].abbreviation
                      : ""
                  }
                  lang={lang}
                />
              </View>
            )}
            <SelectDropdown
              ref={currenyDropdownRef}
              data={
                internalCurrencies
                  ? internalCurrencies.map((e) => e.abbreviation)
                  : []
              }
              defaultButtonText="Choose your currency"
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
              value={values.amount}
              placeholder="Amount"
              style={styles.input}
              keyboardType="numeric"
            />

            <SelectDropdown
              ref={loactionDropdownRef}
              data={locations ? locations.map((e) => e.title) : []}
              disabled={!selectedCurrencyIndex}
              defaultButtonText="Choose the location"
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownButtonText}
              dropdownStyle={styles.dropdown}
              selectedRowStyle={styles.dropdownSelectedRow}
              selectedRowTextStyle={styles.dropdownSelectedRowText}
              onSelect={(e, index) => setSelectedLocationIndex(index)}
            />
            <TextInput
              onBlur={handleBlur("destination")}
              onChangeText={handleChange("destination")}
              value={values.destination}
              placeholder="Destination"
              style={styles.input}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default WithdrawalForm;

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
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

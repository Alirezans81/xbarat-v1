import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import Dropdown from "react-native-select-dropdown";

const Form = ({
  lang,
  availableSources,
  swap,
  exchange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const alert = (amount, rate) => {
    Ref

    const message =
      lang["confirm-exchange-message"] +
      " " +
      amount +
      " " +
      availableSources[selectedIndex].abbreviation +
      " " +
      lang["with-rate-of"] +
      " " +
      rate;
    Alert.alert(lang["are-you-sure"], message, [
      {
        text: lang["cancel"],
        onPress: () => {},
        style: "cancel",
      },
      {
        text: lang["ok"],
        onPress: () => {
          exchange(amount, rate);
        },
      },
    ]);
  };

  return (
    <View>
      <Formik
        initialValues={{ amount: "", rate: "" }}
        onSubmit={(values) => {
          alert(values.amount, values.rate);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.row}>
              <Dropdown
                data={availableSources.map((e) => e.abbreviation)}
                defaultValue={
                  availableSources[0] ? availableSources[0].abbreviation : null
                }
                defaultButtonText="- - -"
                onSelect={(e, index) => {
                  if (index !== selectedIndex) {
                    setSelectedIndex(index);
                    swap();
                  }
                }}
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={
                  availableSources.length === 0
                    ? [styles.dropdownTextButton, styles.textGray]
                    : styles.dropdownTextButton
                }
                dropdownStyle={styles.dropdown}
                rowStyle={styles.dropdownRow}
                selectedRowStyle={styles.selectedDropdownRow}
                selectedRowTextStyle={styles.selectedDropdownRowText}
                disabled={availableSources.length === 0 ? true : false}
              />
              <TextInput
                name="amount"
                placeholder={lang["amount-input-place-holder"]}
                style={styles.textInput}
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  handleBlur("amount");
                }}
                value={values.amount}
                textAlign="left"
                inputMode="decimal"
              />
            </View>
            <View style={styles.row}>
              <Dropdown
                data={[]}
                defaultButtonText={
                  availableSources.length !== 0
                    ? availableSources[0].abbreviation +
                      " / " +
                      availableSources[1].abbreviation
                    : "- - -"
                }
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={[styles.dropdownTextButton, styles.textGray]}
                disabled={true}
              />
              <TextInput
                name="rate"
                placeholder={lang["rate-input-place-holder"]}
                style={styles.textInput}
                onChangeText={handleChange("rate")}
                onBlur={() => {
                  handleBlur("rate");
                }}
                value={values.rate}
                textAlign="left"
                inputMode="decimal"
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>
                {lang["exchange-button-text"]}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  dropdownButton: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  dropdownTextButton: {
    fontSize: 16,
    fontWeight: "300",
  },
  textGray: {
    color: "#aaa",
  },
  dropdown: {
    borderRadius: 10,
    marginVertical: 5,
  },
  dropdownRow: {
    borderBottomWidth: 0,
  },
  selectedDropdownRow: {
    backgroundColor: "#03A9F4",
  },
  selectedDropdownRowText: {
    color: "#fff",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#eee",
    marginLeft: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: "300",
  },
  submitButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AC1",
    height: 45,
    borderRadius: 10,
    marginVertical: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});

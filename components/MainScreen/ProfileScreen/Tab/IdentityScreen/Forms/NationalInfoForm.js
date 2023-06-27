import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const NationalInfoForm = ({
  handleChange,
  handleBlur,
  values,
  editable,
  countries,
  selectedCountryIndex,
  setSelectedCountryIndex,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>National Information</Text>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Nationality</Text>
          <SelectDropdown
            data={countries.map((e) => e.title)}
            defaultValueByIndex={selectedCountryIndex}
            onSelect={(e, index) => setSelectedCountryIndex(index)}
            disabled={!editable}
            buttonStyle={
              editable ? styles.dropdownInput : styles.disabledDropdownInput
            }
            buttonTextStyle={
              editable
                ? styles.dropdownInputText
                : styles.disabledDropdownInputText
            }
            dropdownStyle={styles.dropdown}
            selectedRowStyle={styles.seletedDropdownRow}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Country</Text>
          <SelectDropdown
            data={countries.map((e) => e.title)}
            defaultValueByIndex={selectedCountryIndex}
            onSelect={(e, index) => setSelectedCountryIndex(index)}
            disabled={!editable}
            buttonStyle={
              editable ? styles.dropdownInput : styles.disabledDropdownInput
            }
            buttonTextStyle={
              editable
                ? styles.dropdownInputText
                : styles.disabledDropdownInputText
            }
            dropdownStyle={styles.dropdown}
            selectedRowStyle={styles.seletedDropdownRow}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="city"
            onChangeText={handleChange("city")}
            onBlur={handleBlur("city")}
            value={values.city}
            editable={editable}
          />
        </View>
      </View>
    </View>
  );
};

export default NationalInfoForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#bbb",
    minHeight: 200,
    marginTop: 20,
  },
  head: {
    backgroundColor: "#007AC1",
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  formView: {
    paddingVertical: 15,
  },
  inputView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  label: {
    fontSize: 22,
    fontWeight: "200",
    marginBottom: 5,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 18,
    marginTop: 5,
  },
  disabledInput: {
    borderWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 18,
    marginTop: 5,
  },
  dropdown: {
    borderRadius: 15,
  },
  dropdownInput: {
    width: "100%",
    height: 60,
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 15,
    fontSize: 18,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  dropdownInputText: {
    fontSize: 18,
    fontWeight: "400",
  },
  disabledDropdownInput: {
    width: "100%",
    height: 60,
    borderWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderRadius: 15,
    fontSize: 18,
    marginTop: 5,
  },
  disabledDropdownInputText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#888",
  },
  emailView: {
    borderRadius: 15,
    overflow: "hidden",
  },
  emailInput: {
    borderWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 18,
  },
  twoColView: {
    flexDirection: "row",
  },
  col6: {
    width: "50%",
  },
});

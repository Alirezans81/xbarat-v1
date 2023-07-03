import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const NationalInfoForm = ({
  lang,
  editable,
  nationalities,
  countries,
  cities,
  citiesDropdownRef,
  selectedNationalityIndex,
  setSelectedNationalityIndex,
  selectedCountryIndex,
  setSelectedCountryIndex,
  selectedCityIndex,
  setSelectedCityIndex,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{lang["national-information"]}</Text>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>{lang["nationality"]}</Text>
          <SelectDropdown
            data={nationalities ? nationalities.map((e) => e.title) : []}
            defaultValueByIndex={selectedNationalityIndex}
            disabledIndexs={[selectedNationalityIndex]}
            onSelect={(e, index) => setSelectedNationalityIndex(index)}
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
            selectedRowTextStyle={styles.seletedDropdownRowText}
            defaultButtonText={lang["nationality-default-button-text"]}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>{lang["country"]}</Text>
          <SelectDropdown
            data={countries ? countries.map((e) => e.title) : []}
            defaultValueByIndex={selectedCountryIndex}
            disabledIndexs={[selectedCountryIndex]}
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
            selectedRowTextStyle={styles.seletedDropdownRowText}
            defaultButtonText={lang["country-default-button-text"]}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>{lang["city"]}</Text>
          <SelectDropdown
            data={cities ? cities.map((e) => e.title) : []}
            ref={citiesDropdownRef}
            defaultValueByIndex={selectedCityIndex}
            disabledIndexs={[
              selectedCityIndex !== -1 ? selectedCityIndex : null,
            ]}
            onSelect={(e, index) => setSelectedCityIndex(index)}
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
            selectedRowTextStyle={styles.seletedDropdownRowText}
            defaultButtonText={lang["city-default-button-text"]}
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
  seletedDropdownRow: {
    backgroundColor: "#03A9F4",
  },
  seletedDropdownRowText: {
    color: "#fff",
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

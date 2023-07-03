import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const Afghanistan = ({
  lang,
  editable,
  afghanistanOffices,
  selectedAfghanistanOfficeIndex,
  setSelectedAfghanistanOfficeIndex,
}) => {
  return (
    <View style={styles.formView}>
      <View style={styles.inputView}>
        <Text style={styles.label}>{lang["preferred-office"]}</Text>
        <SelectDropdown
          data={
            afghanistanOffices ? afghanistanOffices.map((e) => e.title) : []
          }
          defaultValueByIndex={selectedAfghanistanOfficeIndex}
          disabledIndexs={[selectedAfghanistanOfficeIndex]}
          onSelect={(e, index) => setSelectedAfghanistanOfficeIndex(index)}
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
        <Text style={styles.label}>{lang["office-address"]}</Text>
        <Text>
          {afghanistanOffices[selectedAfghanistanOfficeIndex]
            ? afghanistanOffices[selectedAfghanistanOfficeIndex].address
            : ""}
        </Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>{lang["office-number"]}</Text>
        <Text>
          {afghanistanOffices[selectedAfghanistanOfficeIndex]
            ? afghanistanOffices[selectedAfghanistanOfficeIndex].number
            : ""}
        </Text>
      </View>
    </View>
  );
};

export default Afghanistan;

const styles = StyleSheet.create({
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
});

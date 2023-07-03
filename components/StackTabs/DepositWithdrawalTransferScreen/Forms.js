import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import DepositForm from "./DepositForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";

const Forms = ({ route }) => {
  const { type, currency } = route.params;

  const dropdownData = [
    { title: "Deposit", value: "deposit" },
    { title: "Withdrawal", value: "withdrawal" },
    { title: "Transfer", value: "transfer" },
  ];
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  useEffect(() => {
    const foundIndex = dropdownData.findIndex((e) => e.value === type);
    setSelectedTypeIndex(foundIndex);
  }, []);

  if (dropdownData[selectedTypeIndex].value === "deposit") {
    return (
      <View style={styles.container}>
        <SelectDropdown
          buttonStyle={styles.typeDropdownButton}
          buttonTextStyle={styles.typeDropdownButtonText}
          dropdownStyle={styles.typeDropdown}
          selectedRowStyle={styles.typeDropdownSelectedRow}
          selectedRowTextStyle={styles.typeDropdownSelectedRowText}
          data={dropdownData.map((e) => e.title)}
          defaultValueByIndex={selectedTypeIndex}
          onSelect={(e, index) => setSelectedTypeIndex(index)}
        />
        <DepositForm />
      </View>
    );
  } else if (dropdownData[selectedTypeIndex].value === "withdrawal") {
    return (
      <View style={styles.container}>
        <SelectDropdown
          buttonStyle={styles.typeDropdownButton}
          buttonTextStyle={styles.typeDropdownButtonText}
          dropdownStyle={styles.typeDropdown}
          selectedRowStyle={styles.typeDropdownSelectedRow}
          selectedRowTextStyle={styles.typeDropdownSelectedRowText}
          data={dropdownData.map((e) => e.title)}
          defaultValueByIndex={selectedTypeIndex}
          onSelect={(e, index) => setSelectedTypeIndex(index)}
        />
        <WithdrawalForm currency={currency} />
      </View>
    );
  } else if (dropdownData[selectedTypeIndex].value === "transfer") {
    return (
      <View style={styles.container}>
        <SelectDropdown
          buttonStyle={styles.typeDropdownButton}
          buttonTextStyle={styles.typeDropdownButtonText}
          dropdownStyle={styles.typeDropdown}
          selectedRowStyle={styles.typeDropdownSelectedRow}
          selectedRowTextStyle={styles.typeDropdownSelectedRowText}
          data={dropdownData.map((e) => e.title)}
          defaultValueByIndex={selectedTypeIndex}
          onSelect={(e, index) => setSelectedTypeIndex(index)}
        />
        <TransferForm currency={currency} />
      </View>
    );
  } else {
    return <Text>Somthing wrong!</Text>;
  }
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  typeDropdownButton: {
    width: "70%",
    backgroundColor: "#999",
    borderRadius: 10,
  },
  typeDropdownButtonText: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 20,
  },
  typeDropdown: {
    borderRadius: 10,
  },
  typeDropdownSelectedRow: {
    backgroundColor: "#03A9F4",
  },
  typeDropdownSelectedRowText: {
    color: "#fff",
  },
});

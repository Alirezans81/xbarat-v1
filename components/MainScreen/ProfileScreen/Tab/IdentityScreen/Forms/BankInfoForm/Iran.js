import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Iran = ({ lang, handleChange, handleBlur, values, editable }) => {
  return (
    <View style={styles.formView}>
      <View style={styles.inputView}>
        <Text style={styles.label}>{lang["shaba-number"]}</Text>
        <TextInput
          style={editable ? styles.input : styles.disabledInput}
          name="shabaNumber"
          onChangeText={handleChange("shabaNumber")}
          onBlur={handleBlur("shabaNumber")}
          value={values.shabaNumber}
          editable={editable}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>{lang["card-number"]}</Text>
        <TextInput
          style={editable ? styles.input : styles.disabledInput}
          name="cartNumber"
          onChangeText={handleChange("cartNumber")}
          onBlur={handleBlur("cartNumber")}
          value={values.cartNumber}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default Iran;

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
});

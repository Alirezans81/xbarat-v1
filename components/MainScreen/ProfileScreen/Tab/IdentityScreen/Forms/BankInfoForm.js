import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const BankInfoForm = ({ handleChange, handleBlur, values, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>National Information</Text>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>preferred Office</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="preferredOffice"
            onChangeText={handleChange("preferredOffice")}
            onBlur={handleBlur("preferredOffice")}
            value={values.preferredOffice}
            editable={editable}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="country"
            onChangeText={handleChange("country")}
            onBlur={handleBlur("country")}
            value={values.country}
            editable={editable}
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

export default BankInfoForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#bbb",
    minHeight: 200,
    marginVertical: 20,
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

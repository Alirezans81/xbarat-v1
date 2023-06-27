import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const UploadDocumentForm = ({
  handleChange,
  handleBlur,
  values,
  editable,
  userInfo,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Upload Documents</Text>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Tazkare Number</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="tazkareNumber"
            onChangeText={handleChange("tazkareNumber")}
            onBlur={handleBlur("tazkareNumber")}
            value={values.tazkareNumber}
            editable={editable}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Passport Number</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="passportNumber"
            onChangeText={handleChange("passportNumber")}
            onBlur={handleBlur("passportNumber")}
            value={values.passportNumber}
            editable={editable}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Document</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="document"
            onChangeText={handleChange("document")}
            onBlur={handleBlur("document")}
            value={values.document}
            editable={editable}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadDocumentForm;

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

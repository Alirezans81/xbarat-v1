import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import UploadDocument from "../../UploadDocument";

const Others = ({
  lang,
  handleChange,
  handleBlur,
  values,
  editable,
  setDocument,
}) => {
  return (
    <View style={styles.formView}>
      <View style={styles.inputView}>
        <Text style={styles.label}>{lang["passport-number"]}</Text>
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
        <Text style={styles.label}>{lang["upload-document"]}</Text>
        <UploadDocument
          initialImage={values.documentFile}
          editable={editable}
          lang={lang}
          setOuterImage={setDocument}
        />
      </View>
    </View>
  );
};

export default Others;

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

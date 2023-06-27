import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const PersonalInfoForm = ({
  handleChange,
  handleBlur,
  values,
  userInfo,
  editable,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Personal Information</Text>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.emailView}>
            <Text style={styles.emailInput}>
              {userInfo ? userInfo.email : ""}
            </Text>
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={editable ? styles.input : styles.disabledInput}
            name="phoneNumber"
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            editable={editable}
          />
        </View>
        <View style={styles.twoColView}>
          <View style={[styles.inputView, styles.col6]}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={editable ? styles.input : styles.disabledInput}
              name="firstName"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
              editable={editable}
            />
          </View>
          <View style={[styles.inputView, styles.col6]}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={editable ? styles.input : styles.disabledInput}
              name="lastName"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
              editable={editable}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfoForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#bbb",
    minHeight: 200,
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

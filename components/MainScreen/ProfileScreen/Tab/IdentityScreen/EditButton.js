import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const EditButton = ({
  editable,
  setEditable,
  resetDropdowns,
  resetForm,
  handleSubmit,
}) => {
  if (!editable) {
    return (
      <TouchableOpacity
        style={[styles.container, styles.editButton]}
        onPress={() => setEditable(true)}
      >
        <Image
          resizeMode="cover"
          style={styles.editIcon}
          source={require("../../../../../assets/App/MainScreen/ProfileScreen/edit.png")}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, styles.onEditContainer]}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            setEditable(false);
            resetDropdowns();
            resetForm();
          }}
        >
          <Image
            resizeMode="cover"
            style={styles.cancelIcon}
            source={require("../../../../../assets/App/MainScreen/ProfileScreen/cancel.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            handleSubmit();
            setEditable(false);
          }}
        >
          <Image
            resizeMode="cover"
            style={styles.submitIcon}
            source={require("../../../../../assets/App/MainScreen/ProfileScreen/submit.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default EditButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    right: 15,
    zIndex: 2,
  },
  editButton: {
    width: 55,
    height: 55,
    backgroundColor: "#03A9F4",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    height: 30,
    width: 30,
  },
  onEditContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#03A9F4",
    borderRadius: 100,
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    margin: 8,
  },
  cancelIcon: {
    height: 38,
    width: 38,
  },
  submitButton: {
    marginRight: 10,
  },
  submitIcon: {
    height: 30,
    width: 30,
  },
});

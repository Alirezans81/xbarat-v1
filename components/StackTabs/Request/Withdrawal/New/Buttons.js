import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Buttons = ({ id, navigation, setEditRequestModalIsVisible, lang }) => {
  const edit = () => {
    setEditRequestModalIsVisible(true);
  };
  const cancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={edit}
        style={[styles.button, styles.editButton]}
      >
        <Text style={[styles.buttonText, styles.editButtonText]}>
          {lang["edit"]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={cancel}
        style={[styles.button, styles.cancelButton]}
      >
        <Text style={[styles.buttonText, styles.cancelButtonText]}>
          {lang["cancel"]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  button: {
    width: "100%",
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
  },
  editButton: {
    borderColor: "#03A9F4",
  },
  editButtonText: {
    color: "#03A9F4",
  },
  cancelButton: {
    backgroundColor: "#E04B4B",
    borderColor: "#E04B4B",
  },
  cancelButtonText: {
    color: "#fff",
  },
});

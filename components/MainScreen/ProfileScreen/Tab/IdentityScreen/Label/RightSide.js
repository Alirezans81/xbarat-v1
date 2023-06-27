import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const RightSide = ({ lang }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Change Password</Text>
    </TouchableOpacity>
  );
};

export default RightSide;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderWidth: 0.5,
    borderRadius: 15,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#27B7F5",
  },
  buttonText: {
    textAlign: "center",
    color: "#27B7F5",
  },
});

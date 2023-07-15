import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import ChangePasswordModal from "./RightSide/ChangePasswordModal";
import { useState } from "react";

const RightSide = ({ lang }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalIsVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{lang["change-password"]}</Text>
      </TouchableOpacity>
      <ChangePasswordModal
        lang={lang}
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
      />
    </>
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

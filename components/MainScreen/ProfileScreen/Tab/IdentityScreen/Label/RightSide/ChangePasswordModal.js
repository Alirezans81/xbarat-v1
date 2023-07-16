import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  lang,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Formik } from "formik";

const ModalContent = ({ setIsVisible, lang }) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsVisible(false)}
      >
        <Image
          source={require("../../../../../../../assets/App/MainScreen/ProfileScreen/close-modal.png")}
          style={styles.closeImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          onSubmit={(values) => {
            if (
              values.newPassword === values.confirmPassword &&
              values.newPassword !== ""
            ) {
              console.log(values.newPassword);
              setIsVisible(false);
            }
          }}
        >
          {({ handleBlur, handleChange, values, handleSubmit }) => (
            <>
              <View style={styles.inputView}>
                <Text style={styles.inputLabel}>{lang["new-password"]}</Text>
                <TextInput
                  style={styles.input}
                  name="newPassword"
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  textContentType="password"
                  secureTextEntry
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabel}>
                  {lang["confirm password"]}
                </Text>
                <TextInput
                  style={styles.input}
                  name="confirmPassword"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  textContentType="password"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>{lang["submit"]}</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  </View>
);

const ChangePasswordModal = ({ isVisible, setIsVisible, lang }) => (
  <Modal isVisible={isVisible} avoidKeyboard={true}>
    <ModalContent setIsVisible={setIsVisible} lang={lang} />
  </Modal>
);

export default ChangePasswordModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    position: "relative",
  },
  closeButton: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  closeImage: {
    width: 30,
    height: 30,
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
  },
  inputView: {
    marginTop: 15,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 5,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "300",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#03A9F4",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Formik } from "formik";

const EditRequestModal = ({ isVisible, setIsVisible, amount, navigation }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={ModalStyles.container}>
        <View style={ModalStyles.contentContainer}>
          <TouchableOpacity
            style={ModalStyles.closeButton}
            onPress={() => {
              setIsVisible(false);
            }}
          >
            <Image
              source={require("../../../../../assets/App/MainScreen/ProfileScreen/close-modal.png")}
              style={ModalStyles.closeImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={ModalStyles.content}>
            <Formik
              initialValues={{ amount }}
              onSubmit={(values) => {
                setIsVisible(false);
                navigation.goBack();
              }}
            >
              {({ handleBlur, handleChange, values, handleSubmit }) => (
                <>
                  <View style={ModalStyles.inputView}>
                    <Text style={ModalStyles.inputLabel}>Amount</Text>
                    <TextInput
                      style={ModalStyles.input}
                      name="amount"
                      onChangeText={handleChange("amount")}
                      onBlur={handleBlur("amount")}
                      value={values.amount}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={ModalStyles.submitButton}
                  >
                    <Text style={ModalStyles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditRequestModal;

const ModalStyles = StyleSheet.create({
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

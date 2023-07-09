import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Formik } from "formik";
import { useState } from "react";

const EditExchangeModal = ({
  isVisible,
  setIsVisible,
  amount,
  rate,
  navigation,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={ModalStyles.container}>
        <View style={ModalStyles.contentContainer}>
          <TouchableOpacity
            style={ModalStyles.closeButton}
            onPress={() => setIsVisible(false)}
          >
            <Image
              source={require("../../assets/App/MainScreen/ProfileScreen/close-modal.png")}
              style={ModalStyles.closeImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={ModalStyles.content}>
            <Formik
              initialValues={{ amount, rate }}
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
                  <View style={ModalStyles.inputView}>
                    <Text style={ModalStyles.inputLabel}>Rate</Text>
                    <TextInput
                      style={ModalStyles.input}
                      name="rate"
                      onChangeText={handleChange("rate")}
                      onBlur={handleBlur("rate")}
                      value={values.rate}
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

import convertNumber from "../../hooks/convertNumber";
import convertDate from "../../hooks/convertDate";

const OrderDetails = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <EditExchangeModal
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
        navigation={navigation}
        amount={data.sourceMoney + ""}
        rate={data.rate + ""}
      />
      <View>
        <View style={styles.row}>
          <View style={styles.col12}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Source</Text>
              <Text style={styles.var}>{data.sourceCurrency.abbreviation}</Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Source Amount</Text>
              <Text style={styles.var}>{convertNumber(data.sourceMoney)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Target</Text>
              <Text style={styles.var}>
                {data.destinationCurrency.abbreviation}
              </Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Target Amount</Text>
              <Text style={styles.var}>
                {convertNumber(data.destinationMoney)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Rate</Text>
              <Text style={styles.var}>{convertNumber(data.rate)}</Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.var}>{convertDate(data.createDate)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={() => setModalIsVisible(true)}
          style={[styles.button, styles.editButton]}
        >
          <Text style={[styles.buttonText, styles.editButtonText]}>
            Edit Exchange
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            Cancel Exchange
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginVertical: 15,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  section: {
    width: 125,
  },
  col6: {
    width: "50%",
    alignItems: "center",
  },
  col12: {
    paddingHorizontal: 50,
  },
  label: {
    fontSize: 20,
    color: "#999",
    fontWeight: "300",
  },
  var: {
    fontSize: 28,
  },
  buttonsView: {
    padding: 30,
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

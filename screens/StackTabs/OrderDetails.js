import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
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
  lang,
  editAlert,
  inventory,
  source,
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
            <Inventory lang={lang} source={source} inventory={inventory} />
            <Formik
              initialValues={{ amount, rate }}
              onSubmit={(values) => {
                editAlert(values.amount, values.rate);
              }}
            >
              {({ handleBlur, handleChange, values, handleSubmit }) => (
                <>
                  <View style={ModalStyles.inputView}>
                    <Text style={ModalStyles.inputLabel}>{lang["amount"]}</Text>
                    <TextInput
                      style={ModalStyles.input}
                      name="amount"
                      onChangeText={handleChange("amount")}
                      onBlur={handleBlur("amount")}
                      value={values.amount}
                      keyboardType="decimal-pad"
                      inputMode="decimal"
                    />
                  </View>
                  <View style={ModalStyles.inputView}>
                    <Text style={ModalStyles.inputLabel}>{lang["rate"]}</Text>
                    <TextInput
                      style={ModalStyles.input}
                      name="rate"
                      onChangeText={handleChange("rate")}
                      onBlur={handleBlur("rate")}
                      value={values.rate}
                      keyboardType="decimal-pad"
                      inputMode="decimal"
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={ModalStyles.submitButton}
                  >
                    <Text style={ModalStyles.submitButtonText}>
                      {lang["submit"]}
                    </Text>
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
import axios from "axios";
import { useEffect } from "react";
import Inventory from "../../components/MainScreen/ExchangeScreen/ExchangeForm/Inventory";

const OrderDetails = ({
  route,
  navigation,
  token,
  lang,
  balances,
  getBalances,
  refreshToken,
}) => {
  const api = require("../../assets/api.json");

  const { data } = route.params;

  const [inventory, setInventory] = useState(0);
  useEffect(() => {
    const found = balances.find((e) => e.currencyId === data.sourceCurrency.id);
    setInventory(found.money);
  }, []);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  };

  const cancelExchange = async () => {
    await axios
      .patch(
        api["cancel-exchange-1st"] + data.id + api["cancel-exchange-2nd"],
        {},
        config
      )
      .then((result) => {
        getBalances();
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.parse(error));
      });
  };
  const cancelAlert = () => {
    if (refreshToken()) {
      Alert.alert(
        lang["are-you-sure"] + "?",
        lang["cancel-exchange-message"] + "?",
        [
          {
            text: lang["cancel"],
            onPress: () => {},
            style: "cancel",
          },
          {
            text: lang["ok"],
            onPress: () => {
              cancelExchange();
            },
          },
        ]
      );
    }
  };

  const editExchange = async (newAmount, newRate) => {
    let param = {};
    param.sourceCurrencyId = data.sourceCurrency.id;
    param.destinationCurrencyId = data.destinationMoney.id;
    param.sourceValue = newAmount;
    param.rate = newRate;
    param.calculationMethod = "";

    await axios
      .put(api["edit-exchange"] + data.id, param, config)
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  const editAlert = (newAmount, newRate) => {
    if (refreshToken()) {
      const message =
        lang["edit-message"] +
        " " +
        data.sourceMoney +
        " " +
        lang["to"] +
        " " +
        newAmount +
        " " +
        lang["and-your-rate-from"] +
        " " +
        data.rate +
        " " +
        lang["to"] +
        " " +
        newRate +
        "?";
      Alert.alert(lang["are-you-sure"] + "?", message, [
        {
          text: lang["cancel"],
          onPress: () => {},
          style: "cancel",
        },
        {
          text: lang["ok"],
          onPress: () => {
            setModalIsVisible(false);
            editExchange(newAmount, newRate);
          },
        },
      ]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <EditExchangeModal
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
        navigation={navigation}
        amount={data.sourceMoney + ""}
        rate={data.rate + ""}
        editAlert={editAlert}
        lang={lang}
        inventory={inventory + data.sourceMoney}
        source={data.sourceCurrency.abbreviation}
      />
      <View>
        <View style={styles.row}>
          <View style={styles.col12}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["source"]}</Text>
              <Text style={styles.var}>{data.sourceCurrency.abbreviation}</Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["source-amount"]}</Text>
              <Text style={styles.var}>{convertNumber(data.sourceMoney)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["target"]}</Text>
              <Text style={styles.var}>
                {data.destinationCurrency.abbreviation}
              </Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["target-amount"]}</Text>
              <Text style={styles.var}>
                {convertNumber(data.destinationMoney)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["rate"]}</Text>
              <Text style={styles.var}>{convertNumber(data.rate)}</Text>
            </View>
          </View>
          <View style={styles.col6}>
            <View style={styles.section}>
              <Text style={styles.label}>{lang["date"]}</Text>
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
            {lang["edit-exchange"]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            cancelAlert();
          }}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            {lang["cancel-exchange"]}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
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

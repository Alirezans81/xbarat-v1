import { StyleSheet, ScrollView, Alert } from "react-native";
import React from "react";
import DepositStatus from "./Deposit/DepositStatus";
import DepositDetails from "./Deposit/DepositDetails";
import Buttons from "./Deposit/New/Buttons";
import EditRequestModal from "./Deposit/New/EditRequestModal";
import Assignment from "./Common/Assignment";
import { useState, useEffect } from "react";
import axios from "axios";
import IranUploadDocument from "./Deposit/WaitingForPayment/IranUploadDocument";
import AfghanistanUploadDocument from "./Deposit/WaitingForPayment/AfghanistanUploadDocument";
import OtherUploadDocument from "./Deposit/WaitingForPayment/OtherUploadDocument";
import UploadedImage from "./Deposit/UploadedImage";
import WhyRejected from "./Deposit/Rejected/WhyRejected";

const Deposit = ({
  data,
  navigation,
  token,
  lang,
  refreshToken,
  getBalances,
}) => {
  const api = require("../../../assets/api.json");

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const result = await axios.get(api["countries"]);
      setCountries(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  const [countryTitle, setCountryTitle] = useState("");
  useEffect(() => {
    countries.find((e) => {
      if (data.countryId === e.value) setCountryTitle(e.title);
    });
  }, [countries]);

  const [editRequestModalIsVisible, setEditRequestModalIsVisible] =
    useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  };

  const edit = async (newAmount) => {
    const param = {
      amount: newAmount,
      currencyId: data.currencyId,
      countryId: data.countryId,
    };

    await axios
      .put(api["edit-deposit"] + data.id, param, config)
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  const editAlert = (newAmount) => {
    if (refreshToken()) {
      const message =
        lang["edit-message"] +
        " " +
        data.money +
        " " +
        lang["to"] +
        " " +
        newAmount +
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
            edit(newAmount);
            setEditRequestModalIsVisible(false);
          },
        },
      ]);
    }
  };

  const cancel = async () => {
    await axios
      .patch(
        api["cancel-deposit-1st"] + data.id + api["cancel-deposit-2nd"],
        {},
        config
      )
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  const cancelAlert = () => {
    if (refreshToken()) {
      Alert.alert(
        lang["are-you-sure"] + "?",
        lang["cancel-deposit-message"] + "?",
        [
          {
            text: lang["cancel"],
            onPress: () => {},
            style: "cancel",
          },
          {
            text: lang["ok"],
            onPress: () => {
              cancel();
            },
          },
        ]
      );
    }
  };

  const [specificData, setSpecificData] = useState();
  const getSpecificData = async () => {
    try {
      const result = await axios.get(api["deposit-data"] + data.id, config);
      setSpecificData(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    data.status !== "New" && data !== "WaitingForPayment" && getSpecificData();
  }, []);

  if (data.status === "New") {
    return (
      <ScrollView style={styles.container}>
        <EditRequestModal
          amount={data.money + ""}
          isVisible={editRequestModalIsVisible}
          setIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          editAlert={editAlert}
        />
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <Assignment lang={lang} />
        <Buttons
          setEditRequestModalIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          cancelAlert={cancelAlert}
        />
      </ScrollView>
    );
  } else if (data.status === "WaitingForPayment") {
    if (countryTitle === "Iran") {
      return (
        <ScrollView style={styles.container}>
          <DepositStatus status={data.status} lang={lang} />
          <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
          <IranUploadDocument
            depositId={data.id}
            amount={data.money}
            token={token}
            navigation={navigation}
            lang={lang}
          />
        </ScrollView>
      );
    } else if (countryTitle === "Afghanistan") {
      return (
        <ScrollView style={styles.container}>
          <DepositStatus status={data.status} lang={lang} />
          <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
          <AfghanistanUploadDocument
            depositId={data.id}
            amount={data.money}
            token={token}
            navigation={navigation}
            lang={lang}
          />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <DepositStatus status={data.status} lang={lang} />
          <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
          <OtherUploadDocument
            depositId={data.id}
            amount={data.money}
            token={token}
            navigation={navigation}
            lang={lang}
          />
        </ScrollView>
      );
    }
  } else if (data.status === "WaitingForAdministrationApprove") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage
          uri={
            specificData
              ? api["deposit-identity"] + specificData.paymentIdentity
              : null
          }
        />
      </ScrollView>
    );
  } else if (data.status === "Accepted") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage
          uri={
            specificData
              ? api["deposit-identity"] + specificData.paymentIdentity
              : null
          }
        />
      </ScrollView>
    );
  } else if (data.status === "Rejected") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage
          uri={
            specificData
              ? api["deposit-identity"] + specificData.paymentIdentity
              : null
          }
        />
        <WhyRejected lang={lang} />
      </ScrollView>
    );
  }
};

export default Deposit;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});

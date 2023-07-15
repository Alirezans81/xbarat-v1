import { StyleSheet, ScrollView } from "react-native";
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

const Deposit = ({ data, navigation, token, lang }) => {
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

  if (data.status === "New") {
    return (
      <ScrollView style={styles.container}>
        <EditRequestModal
          navigation={navigation}
          amount={data.money + ""}
          isVisible={editRequestModalIsVisible}
          setIsVisible={setEditRequestModalIsVisible}
          lang={lang}
        />
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <Assignment lang={lang} />
        <Buttons
          id={data.id}
          navigation={navigation}
          setEditRequestModalIsVisible={setEditRequestModalIsVisible}
          lang={lang}
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
          <OtherUploadDocument lang={lang} />
        </ScrollView>
      );
    }
  } else if (data.status === "WaitingForAdministrationApprove") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage  />
      </ScrollView>
    );
  } else if (data.status === "Accepted") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage />
      </ScrollView>
    );
  } else if (data.status === "Rejected") {
    return (
      <ScrollView style={styles.container}>
        <DepositStatus status={data.status} lang={lang} />
        <DepositDetails countryTitle={countryTitle} data={data} lang={lang} />
        <UploadedImage />
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

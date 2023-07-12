import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import WithdrawalStatus from "./Withdrawal/WithdrawalStatus";
import WithdrawalDetails from "./Withdrawal/WithdrawalDetails";
import axios from "axios";
import Assignment from "./Common/Assignment";
import EditRequestModal from "./Withdrawal/New/EditRequestModal";
import Buttons from "./Withdrawal/New/Buttons";
import WaitText from "./Withdrawal/WaitingForPayment/WaitText";
import UploadedImage from "./Withdrawal/UploadedImage";
import WhyRejected from "./Withdrawal/Rejected/WhyRejected";

const Withdrawal = ({ data, navigation }) => {
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
      <ScrollView>
        <EditRequestModal
          navigation={navigation}
          amount={data.money + ""}
          destination={data.destination + ""}
          isVisible={editRequestModalIsVisible}
          setIsVisible={setEditRequestModalIsVisible}
        />
        <WithdrawalStatus status={data.status} />
        <WithdrawalDetails countryTitle={countryTitle} data={data} />
        <Assignment />
        <Buttons
          id={data.id}
          navigation={navigation}
          setEditRequestModalIsVisible={setEditRequestModalIsVisible}
        />
      </ScrollView>
    );
  } else if (data.status === "WaitingForPayment") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} />
        <WithdrawalDetails countryTitle={countryTitle} data={data} />
        <WaitText />
      </ScrollView>
    );
  } else if (data.status === "Accepted") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} />
        <WithdrawalDetails countryTitle={countryTitle} data={data} />
        <UploadedImage />
      </ScrollView>
    );
  } else if (data.status === "Rejected") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} />
        <WithdrawalDetails countryTitle={countryTitle} data={data} />
        <UploadedImage />
        <WhyRejected />
      </ScrollView>
    );
  }
};

export default Withdrawal;

const styles = StyleSheet.create({});

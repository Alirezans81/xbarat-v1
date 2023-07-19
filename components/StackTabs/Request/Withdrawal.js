import { Alert, ScrollView, StyleSheet, Text } from "react-native";
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

const Withdrawal = ({ data, navigation, lang, token, refreshToken }) => {
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

  const edit = async (newAmount, newDestination) => {
    const param = {
      amount: newAmount,
      destination: newDestination,
      currencyId: data.currencyId,
      countryId: data.countryId,
    };

    await axios
      .put(api["edit-withdrawal"] + data.id, param, config)
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  const editAlert = (newAmount, newDestination) => {
    if (refreshToken()) {
      const message =
        "Are you sure you want to change your amount from " +
        data.money +
        " to " +
        newAmount +
        "?";
      Alert.alert("Are you sure?", message, [
        {
          text: lang["cancel"],
          onPress: () => {},
          style: "cancel",
        },
        {
          text: lang["ok"],
          onPress: () => {
            edit(newAmount, newDestination);
            setEditRequestModalIsVisible(false);
          },
        },
      ]);
    }
  };

  const cancel = async () => {
    await axios
      .patch(
        api["cancel-withdrawal-1st"] + data.id + api["cancel-withdrawal-2nd"],
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
        "Are you sure?",
        "Are you sure you want cancel the withdrawal request?",
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
    if (refreshToken()) {
      try {
        const result = await axios.get(
          api["withdrawal-data"] + data.id,
          config
        );
        setSpecificData(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    (data.status === "Accepted" || data.status === "Rejected") &&
      getSpecificData();
  }, []);

  if (data.status === "New") {
    return (
      <ScrollView>
        <EditRequestModal
          amount={data.money + ""}
          destination={data.destination + ""}
          isVisible={editRequestModalIsVisible}
          setIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          editAlert={editAlert}
        />
        <WithdrawalStatus status={data.status} lang={lang} />
        <WithdrawalDetails
          countryTitle={countryTitle}
          data={data}
          lang={lang}
        />
        <Assignment lang={lang} />
        <Buttons
          setEditRequestModalIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          cancelAlert={cancelAlert}
        />
      </ScrollView>
    );
  } else if (data.status === "WaitingForPayment") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} lang={lang} />
        <WithdrawalDetails
          countryTitle={countryTitle}
          data={data}
          lang={lang}
        />
        <WaitText lang={lang} />
      </ScrollView>
    );
  } else if (data.status === "Accepted") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} lang={lang} />
        <WithdrawalDetails
          countryTitle={countryTitle}
          data={data}
          lang={lang}
        />
        <UploadedImage
          uri={
            specificData
              ? api["deposit-identity"] + specificData.paymentIdentity
              : "/"
          }
        />
      </ScrollView>
    );
  } else if (data.status === "Rejected") {
    return (
      <ScrollView>
        <WithdrawalStatus status={data.status} lang={lang} />
        <WithdrawalDetails
          countryTitle={countryTitle}
          data={data}
          lang={lang}
        />
        <UploadedImage
          uri={
            specificData
              ? api["deposit-identity"] + specificData.paymentIdentity
              : "/"
          }
        />
        <WhyRejected lang={lang} />
      </ScrollView>
    );
  }
};

export default Withdrawal;

const styles = StyleSheet.create({});

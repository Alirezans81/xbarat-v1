import { StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import EditRequestModal from "./Transfer/New/EditRequestModal";
import Buttons from "./Transfer/New/Buttons";
import TransferStatus from "./Transfer/TransferStatus";
import TransferDetails from "./Transfer/TransferDetails";
import WaitText from "./Transfer/New/WaitText";
import WhyRejected from "./Transfer/Rejected/WhyRejected";
import axios from "axios";
import { useEffect } from "react";

const Transfer = ({ data, navigation, token, lang, refreshToken }) => {
  const [editRequestModalIsVisible, setEditRequestModalIsVisible] =
    useState(false);

  const api = require("../../../assets/api.json");
  const config = {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  };

  const edit = async (newAmount, newDestination) => {
    const param = {
      amount: newAmount,
      receiverPersonCode: newDestination,
      currencyId: data.currencyId,
    };

    await axios
      .put(api["edit-transfer"] + data.id, param, config)
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
        lang["edit-message"] +
        " " +
        data.money +
        " " +
        lang["to"] +
        " " +
        newAmount +
        " " +
        lang["and-change-your-destination-from"] +
        " " +
        data.personCode +
        " " +
        lang["to"] +
        " " +
        newDestination +
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
        api["cancel-transfer-1st"] + data.id + api["cancel-transfer-2nd"],
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
        lang["cancel-transfer-message"] + "?",
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

  useEffect(() => {
    refreshToken();
  }, []);

  if (data.status === "New") {
    return (
      <ScrollView style={styles.container}>
        <EditRequestModal
          amount={data.money + ""}
          destination={data.personCode}
          isVisible={editRequestModalIsVisible}
          setIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          editAlert={editAlert}
        />
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
        <WaitText lang={lang} />
        <Buttons
          setEditRequestModalIsVisible={setEditRequestModalIsVisible}
          lang={lang}
          cancelAlert={cancelAlert}
        />
      </ScrollView>
    );
  } else if (data.status === "Accepted") {
    return (
      <ScrollView style={styles.container}>
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
      </ScrollView>
    );
  } else if (data.status === "Rejected") {
    return (
      <ScrollView style={styles.container}>
        <TransferStatus status={data.status} lang={lang} />
        <TransferDetails data={data} lang={lang} />
        <WhyRejected lang={lang} />
      </ScrollView>
    );
  }
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

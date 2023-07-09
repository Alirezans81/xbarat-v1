import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./PendingRequests/Header";
import Table from "./PendingRequests/Table";
import axios from "axios";

const PendingRequests = ({ lang, token, refreshToken, stackNavigation }) => {
  const api = require("../../../assets/api.json");

  const [pendingRequestsData, setPendingRequestsData] = useState();
  const getPendingRequests = async () => {
    if (refreshToken()) {
      try {
        const config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };

        const result = await axios.get(api["pending-requests"], config);
        setPendingRequestsData(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    getPendingRequests();
  });

  return (
    <View style={styles.container}>
      <Header lang={lang} />
      <Table
        lang={lang}
        data={pendingRequestsData}
        stackNavigation={stackNavigation}
      />
    </View>
  );
};

export default PendingRequests;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

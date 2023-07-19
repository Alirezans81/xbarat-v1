import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopButtonTabs from "../../components/StackTabs/OrdersScreen/TopButtonTab";
import { useState } from "react";
import Table from "../../components/StackTabs/OrdersScreen/Table";
import { useEffect } from "react";
import axios from "axios";

const OrdersScreen = ({ token, navigation, lang, refreshToken }) => {
  const api = require("../../assets/api.json");

  const [type, setType] = useState("open");

  const [exhcanges, setExchanges] = useState(null);
  const getExchanges = async () => {
    if (refreshToken()) {
      try {
        const config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };
        const result = await axios.get(api["exhcanges"], config);
        setExchanges(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    getExchanges();
  });

  if (type === "open") {
    return (
      <View style={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <ScrollView style={{ flex: 1 }}>
          <Table
            lang={lang}
            navigation={navigation}
            data={exhcanges ? exhcanges.pendingExchangeDetails : null}
          />
        </ScrollView>
      </View>
    );
  } else if (type === "done") {
    return (
      <View style={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <ScrollView style={{ flex: 1 }}>
          <Table
            lang={lang}
            navigation={navigation}
            data={exhcanges ? exhcanges.todayDoneExchangeDetails : null}
          />
        </ScrollView>
      </View>
    );
  } else if (type === "today") {
    return (
      <View style={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <ScrollView style={{ flex: 1 }}>
          <Table
            lang={lang}
            navigation={navigation}
            data={exhcanges ? exhcanges.allTodayExchangeDetails : null}
          />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <ScrollView style={{ flex: 1 }}>
          <Text>{lang["something-wrong"]}</Text>
        </ScrollView>
      </View>
    );
  }
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

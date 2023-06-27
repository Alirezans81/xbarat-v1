import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/MainScreen/ExchangeScreen/Header";
import WatchTable from "../../components/MainScreen/ExchangeScreen/WatchTable";
import axios from "axios";
import ExchangeForm from "../../components/MainScreen/ExchangeScreen/ExchangeForm";
import Requests from "../../components/MainScreen/ExchangeScreen/Requests";
import Exchanges from "../../components/MainScreen/ExchangeScreen/Exchanges";

const ExchangeScreen = ({ lang, token, refreshToken, balances }) => {
  const api = require("../../assets/api.json");
  const refreshTime = 10000;

  // Watch Table
  const [watchTableData, setWatchTableData] = useState([]);
  const getWatchTableData = async () => {
    try {
      const result = await axios.get(api["watch-table"]);

      const mappedResult = result.data.filter((e) => e.order === 1);
      setWatchTableData(mappedResult);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWatchTableData();
  }, [1]);
  useEffect(() => {
    setInterval(() => {
      getWatchTableData();
    }, refreshTime);
  }, []);
  // End of Watch Table

  // Exchange From
  const [availableSources, setAvailableSources] = useState([]);
  const [source, setSource] = useState({});
  const [target, setTarget] = useState({});
  const [inventory, setInventory] = useState(0);
    useState();
  const swap = () => {
    const sourceTemp = source;
    setSource(target);
    setTarget(sourceTemp);
  };
  const exchange = async (amount, rate) => {
    if (amount !== 0 && rate !== 0) {
      if (refreshToken()) {
        console.log("exchanging...");
        try {
          let param = {};
          param.sourceCurrencyId = source.id;
          param.destinationCurrencyId = target.id;
          param.sourceValue = amount;
          param.rate = rate;

          const config = {
            headers: {
              Authorization: "Bearer " + token.accessToken,
            },
          };
          const result = await axios.post(api["exchange"], param, config);

          console.log(result.data);
        } catch (error) {
          console.log(error.toString());
        }
      }
    }
  };
  useEffect(() => {
    if (balances) {
      const newInventory = balances.find(
        (e) => e.currency === source.abbreviation
      );
      setInventory(newInventory ? newInventory.money : 0);
    }
  }, [source]);
  // End of Exchange Form

  // Requests
  const [requestsData, setRequestsData] = useState({});
  // End of Requests

  // Exchanges
  const [exchangesData, setExchangesData] = useState({});
  // End of Exchanges

  const getRequestsAndExchangesData = async () => {
    setRequestsData({});
    setExchangesData({});

    try {
      const url =
        api["exchanges-data"] +
        "/" +
        availableSources[0].id +
        "/" +
        availableSources[1].id;
      const result = await axios.get(url);

      setRequestsData({
        sourceToDestination: result.data.sourceToDestinationExchangeRequests,
        destinationToSource: result.data.destinationToSourceExchangeRequests,
      });
      setExchangesData(result.data.bureauDeChangeRates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequestsAndExchangesData();
  }, [availableSources]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        resizeMode="cover"
        source={require("../../assets/App/MainScreen/ExchangeScreen/background.png")}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.KeyboardAvoidingView}
      >
        <ScrollView>
          <Header lang={lang} />
          <WatchTable
            lang={lang}
            watchTableData={watchTableData}
            setAvailableSources={setAvailableSources}
            setSource={setSource}
            setTarget={setTarget}
          />
          <ExchangeForm
            lang={lang}
            availableSources={availableSources}
            swap={swap}
            exchange={exchange}
            inventory={inventory}
            source={source.abbreviation}
          />
          <Requests
            lang={lang}
            availableSources={availableSources}
            requestsData={requestsData}
          />
          <Exchanges
            lang={lang}
            data={exchangesData}
            availableSources={availableSources}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
  backgroundImg: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    top: 0,
    left: 0,
  },
});

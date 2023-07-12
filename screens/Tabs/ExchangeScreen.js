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
import { useRef } from "react";

const ExchangeScreen = ({
  lang,
  token,
  refreshToken,
  balances,
  stackNavigation,
  getBalances,
}) => {
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
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getWatchTableData();
    setInterval(() => {
      getWatchTableData();
    }, refreshTime);
  }, []);
  // End of Watch Table

  // Exchange From
  const [availableSources, setAvailableSources] = useState([]);
  const [selectedSourceIndex, setSelectedSourceIndex] = useState();
  const [source, setSource] = useState({});
  const [target, setTarget] = useState({});
  const [inventory, setInventory] = useState(0);
  const swap = () => {
    const sourceTemp = source;
    setSource(target);
    setTarget(sourceTemp);
  };
  const exchange = async (amount, rate) => {
    if (amount !== 0 && amount <= inventory && rate !== 0 && source.id) {
      if (refreshToken()) {
        let param = {};
        param.sourceCurrencyId = source.id;
        param.destinationCurrencyId = target.id;
        param.sourceValue = +amount;
        param.rate = +rate;
        param.calculationMethod = "";

        console.log(param);

        const config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };
        await axios
          .post(api["exchange"], param, config)
          .then((result) => {
            getBalances();
            stackNavigation.navigate("Orders");
          })
          .catch((error) => {
            console.log(JSON.stringify(error));
          });
      }
    }
  };
  const initalInventory = () => {
    if (balances && availableSources[selectedSourceIndex]) {
      const newInventory = balances.find(
        (e) => e.currency === availableSources[selectedSourceIndex].abbreviation
      );
      setInventory(newInventory ? newInventory.money : 0);
    }
  };
  useEffect(() => {
    initalInventory();
  }, [balances]);
  useEffect(() => {
    initalInventory();
  }, [selectedSourceIndex, source]);
  const availableSourcesRef = useRef();
  useEffect(() => {
    availableSourcesRef.current.selectIndex(0);
  }, [availableSources]);
  useEffect(() => {
    availableSourcesRef.current.selectIndex(selectedSourceIndex);
  }, [selectedSourceIndex]);
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
      console.log(JSON.stringify(error));
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
          <Header lang={lang} stackNavigation={stackNavigation} />
          <WatchTable
            lang={lang}
            watchTableData={watchTableData}
            setAvailableSources={setAvailableSources}
            setSelectedSourceIndex={setSelectedSourceIndex}
            setSource={setSource}
            setTarget={setTarget}
          />
          <ExchangeForm
            lang={lang}
            availableSources={availableSources}
            availableSourcesRef={availableSourcesRef}
            selectedSourceIndex={selectedSourceIndex}
            setSelectedSourceIndex={setSelectedSourceIndex}
            swap={swap}
            exchange={exchange}
            inventory={inventory}
            source={source.abbreviation}
            stackNavigation={stackNavigation}
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

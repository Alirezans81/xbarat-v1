import { StyleSheet, Image, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/MainScreen/ExchangeScreen/Header";
import WatchTable from "../../components/MainScreen/ExchangeScreen/WatchTable";
import axios from "axios";

const ExchangeScreen = ({ lang }) => {
  const api = require("../../assets/api.json");

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
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        resizeMode="cover"
        source={require("../../assets/App/MainScreen/ExchangeScreen/background.png")}
      />
      <Header lang={lang} />
      <WatchTable lang={lang} watchTableData={watchTableData} />
    </View>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    top: 0,
    left: 0,
  },
});

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import OrdersScreen from "../screens/StackTabs/OrdersScreen";
import DepositWithdrawalTransferScreen from "../screens/StackTabs/DepositWithdrawalTransferScreen";
import OrderDetails from "../screens/StackTabs/OrderDetails";
import Request from "../screens/StackTabs/Request";
import ReportDetails from "../screens/StackTabs/ReportDetails";
import AboutUsScreen from "../screens/StackTabs/AboutUsScreen";
import HelpScreen from "../screens/StackTabs/HelpScreen";
import { useEffect } from "react";
import axios from "axios";

const StackNavigator = ({
  lang,
  setLang,
  token,
  refreshToken,
  setLoggedIn,
}) => {
  const api = require("../assets/api.json");

  const Stack = createStackNavigator();

  const [balances, setBalances] = useState();
  const getBalances = async () => {
    if (refreshToken()) {
      setBalances([]);
      try {
        const config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };

        const result = await axios.get(api["wallet-balances"], config);

        setBalances(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    getBalances();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "#03A9F4",
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Stack.Screen
        name="MainScreen"
        children={(props) => (
          <MainScreen
            {...props}
            lang={lang}
            setLang={setLang}
            token={token}
            refreshToken={refreshToken}
            setLoggedIn={setLoggedIn}
            balances={balances}
            getBalances={getBalances}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Orders"
        children={(props) => (
          <OrdersScreen
            {...props}
            lang={lang}
            setLang={setLang}
            token={token}
            refreshToken={refreshToken}
          />
        )}
      />
      <Stack.Screen
        name="Order Details"
        children={(props) => (
          <OrderDetails
            {...props}
            lang={lang}
            setLang={setLang}
            token={token}
            refreshToken={refreshToken}
            balances={balances}
            getBalances={getBalances}
          />
        )}
      />
      <Stack.Screen
        name="DepositWithdrawalTransfer"
        options={{ title: "Transaction" }}
        children={(props) => (
          <DepositWithdrawalTransferScreen
            {...props}
            lang={lang}
            setLang={setLang}
            token={token}
            refreshToken={refreshToken}
          />
        )}
      />
      <Stack.Screen
        name="Request"
        children={(props) => (
          <Request
            {...props}
            lang={lang}
            setLang={setLang}
            token={token}
            refreshToken={refreshToken}
          />
        )}
      />
      <Stack.Screen
        name="Report Details"
        children={(props) => <ReportDetails {...props} lang={lang} />}
      />
      <Stack.Screen name="About Us" children={(props) => <AboutUsScreen />} />
      <Stack.Screen name="Help" children={(props) => <HelpScreen />} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    fontWeight: "300",
  },
});

export default StackNavigator;

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
  storeAccessToken,
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
            storeAccessToken={storeAccessToken}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ title: lang["orders"] }}
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
        options={{ title: lang["order-details"] }}
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
        options={{ title: lang["transaction"] }}
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
        options={{ title: lang["request"] }}
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
        options={{ title: lang["report-details"] }}
        name="Report Details"
        children={(props) => <ReportDetails {...props} lang={lang} />}
      />
      <Stack.Screen
        options={{ title: lang["about-us"] }}
        name="About Us"
        children={(props) => <AboutUsScreen {...props} />}
      />
      <Stack.Screen
        options={{ title: lang["help"] }}
        name="Help"
        children={(props) => <HelpScreen {...props} />}
      />
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

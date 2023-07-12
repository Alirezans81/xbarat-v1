import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import OrdersScreen from "../screens/StackTabs/OrdersScreen";
import DepositWithdrawalTransferScreen from "../screens/StackTabs/DepositWithdrawalTransferScreen";
import OrderDetails from "../screens/StackTabs/OrderDetails";
import Request from "../screens/StackTabs/Request";
import ReportDetails from "../screens/StackTabs/ReportDetails";

const StackNavigator = ({ lang, setLang, token, refreshToken }) => {
  const Stack = createStackNavigator();

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
        children={(props) => <ReportDetails {...props} />}
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

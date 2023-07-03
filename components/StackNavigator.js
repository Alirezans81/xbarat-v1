import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import OrdersScreen from "../screens/StackTabs/OrdersScreen";
import DepositWithdrawalTransferScreen from "../screens/StackTabs/DepositWithdrawalTransferScreen";

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
        children={() => (
          <OrdersScreen
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

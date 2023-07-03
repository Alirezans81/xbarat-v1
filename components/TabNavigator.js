import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExchangeScreen from "../screens/Tabs/ExchangeScreen";
import WalletScreen from "../screens/Tabs/WalletScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen";
import { Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Tab = createBottomTabNavigator();

const TabNavigator = ({
  lang,
  setLang,
  token,
  refreshToken,
  stackNavigation,
}) => {
  const iconSize = 37;

  const api = require("../assets/api.json");

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

  const [userInfo, setUserInfo] = useState();
  const getUserInfo = async () => {
    if (refreshToken()) {
      try {
        const config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };

        const result = await axios.get(api["user-info"], config);
        setUserInfo(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
      }}
    >
      <Tab.Screen
        name="Exchange"
        children={() => (
          <ExchangeScreen
            lang={lang}
            token={token}
            refreshToken={refreshToken}
            balances={balances}
            stackNavigation={stackNavigation}
          />
        )}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: iconSize, height: iconSize }}
              resizeMode="stretch"
              source={
                focused
                  ? require("../assets/tab-navaigator-icons/active-exchange.png")
                  : require("../assets/tab-navaigator-icons/exchange.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        children={() => (
          <WalletScreen
            lang={lang}
            token={token}
            refreshToken={refreshToken}
            balances={balances}
            stackNavigation={stackNavigation}
          />
        )}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: iconSize, height: iconSize }}
              resizeMode="stretch"
              source={
                focused
                  ? require("../assets/tab-navaigator-icons/active-wallet.png")
                  : require("../assets/tab-navaigator-icons/wallet.png")
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        children={() => (
          <ProfileScreen
            lang={lang}
            token={token}
            refreshToken={refreshToken}
            userInfo={userInfo}
          />
        )}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: iconSize, height: iconSize }}
              resizeMode="stretch"
              source={
                focused
                  ? require("../assets/tab-navaigator-icons/active-profile.png")
                  : require("../assets/tab-navaigator-icons/profile.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#eee",
    height: 55,
  },
});

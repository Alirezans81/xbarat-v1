import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExchangeScreen from "../screens/Tabs/ExchangeScreen";
import WalletScreen from "../screens/Tabs/WalletScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ lang, setLang }) => {
  const iconSize = 40;

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
        children={() => <ExchangeScreen lang={lang} />}
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
        children={() => <WalletScreen lang={lang} />}
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
        children={() => <ProfileScreen lang={lang} setLang={setLang} />}
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
    height: 58,
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExchangeScreen from "../screens/Tabs/ExchangeScreen";
import WalletScreen from "../screens/Tabs/WalletScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
        component={ExchangeScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: 45, height: 45 }}
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
        component={WalletScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: 45, height: 45 }}
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
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Image
              style={{ width: 45, height: 45 }}
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
    backgroundColor: "#ddd",
    height: 65,
  },
});

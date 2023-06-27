import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IdentityScreen from "./Tab/IdentityScreen";
import ReportScreen from "./Tab/ReportScreen";

const Tab = createMaterialTopTabNavigator();

function TabScreen({ lang, token, refreshToken, userInfo }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#028BCA",
        tabBarInactiveTintColor: "#999",
        tabBarIndicatorStyle: {
          backgroundColor: "#028BCA",
        },
      }}
    >
      <Tab.Screen
        name="Identity"
        children={() => (
          <IdentityScreen
            lang={lang}
            token={token}
            refreshToken={refreshToken}
            userInfo={userInfo}
          />
        )}
      />
      <Tab.Screen name="Report" children={() => <ReportScreen lang={lang} />} />
    </Tab.Navigator>
  );
}

export default TabScreen;

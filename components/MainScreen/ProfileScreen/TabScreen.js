import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IdentityScreen from "../../../screens/Tabs/ProfileScreen/IdentityScreen";
import ReportScreen from "../../../screens/Tabs/ProfileScreen/ReportScreen";

const Tab = createMaterialTopTabNavigator();

function TabScreen({ lang, token, refreshToken, userInfo, stackNavigation }) {
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
      <Tab.Screen
        name="Report"
        children={() => (
          <ReportScreen
            lang={lang}
            token={token}
            refreshToken={refreshToken}
            stackNavigation={stackNavigation}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default TabScreen;

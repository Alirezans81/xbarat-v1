import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tab from "../../components/MainScreen/ProfileScreen/TabScreen";

const ProfileScreen = ({ lang, token, refreshToken, userInfo, stackNavigation }) => {
  return (
    <Tab
      lang={lang}
      token={token}
      refreshToken={refreshToken}
      userInfo={userInfo}
      stackNavigation={stackNavigation}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

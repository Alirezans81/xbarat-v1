import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tab from "../../components/MainScreen/ProfileScreen/TabScreen";

const ProfileScreen = ({ lang, token, refreshToken, userInfo }) => {
  return (
    <Tab
      lang={lang}
      token={token}
      refreshToken={refreshToken}
      userInfo={userInfo}
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

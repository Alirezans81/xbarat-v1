import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LeftSide = ({ lang, userInfo }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileIcon}
        sizeMode="cover"
        source={require("../../../../../../assets/App/MainScreen/ProfileScreen/profile.png")}
      />
      {userInfo && userInfo.personCode ? (
        <View style={styles.personCodeView}>
          <Text style={styles.personCodeTitle}>{lang["person-code"]}</Text>
          <Text style={styles.personCode}>{userInfo.personCode}</Text>
        </View>
      ) : (
        <Text style={styles.profileWarn}>
          {lang["complete-profile-warn"] + "."}
        </Text>
      )}
    </View>
  );
};

export default LeftSide;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  profileWarn: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "300",
    width: 150,
  },
  personCodeView: {
    marginLeft: 10,
  },
  personCodeTitle: {
    color: "#999",
  },
  personCode: {
    fontSize: 18,
  },
});

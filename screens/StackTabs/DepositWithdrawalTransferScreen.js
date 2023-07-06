import { KeyboardAvoidingView, StyleSheet, Platform, View } from "react-native";
import React from "react";
import Forms from "../../components/StackTabs/DepositWithdrawalTransferScreen/Forms";

const DepositWithdrawalTransferScreen = ({ lang, route, navigation }) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Forms route={route} lang={lang} navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default DepositWithdrawalTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});

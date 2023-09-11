import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Forms from "../../components/StackTabs/DepositWithdrawalTransferScreen/Forms";
import Loader from "react-native-modal-loader";
import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const DepositWithdrawalTransferScreen = ({
  lang,
  route,
  navigation,
  token,
  refreshToken,
  getBalances,
  userInfo,
}) => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback
        style={{ backgroundColor: "red", zIndex: 10 }}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {userInfo.isActive ? (
            <>
              <Loader loading={loadingSpinner} color="#03A9F4" />

              <Forms
                route={route}
                lang={lang}
                navigation={navigation}
                token={token}
                setLoadingSpinner={setLoadingSpinner}
                refreshToken={refreshToken}
                getBalances={getBalances}
              />
            </>
          ) : (
            <View style={styles.errorView}>
              <Text style={styles.error}>
                {lang["not-completed-profile-error"] + "."}
              </Text>
            </View>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default DepositWithdrawalTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  errorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  error: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "300",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#03A9F4",
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});

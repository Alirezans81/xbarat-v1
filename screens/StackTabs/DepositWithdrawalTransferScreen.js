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

const DepositWithdrawalTransferScreen = ({
  lang,
  route,
  navigation,
  token,
  refreshToken,
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
          <Loader loading={loadingSpinner} color="#03A9F4" />
          <Forms
            route={route}
            lang={lang}
            navigation={navigation}
            token={token}
            setLoadingSpinner={setLoadingSpinner}
            refreshToken={refreshToken}
          />
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
});

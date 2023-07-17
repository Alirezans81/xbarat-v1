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

const DepositWithdrawalTransferScreen = ({
  lang,
  route,
  navigation,
  token,
}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback
        style={{ backgroundColor: "red", zIndex: 10 }}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Forms
            route={route}
            lang={lang}
            navigation={navigation}
            token={token}
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

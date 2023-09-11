import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Deposit from "../../components/StackTabs/Request/Deposit";
import Withdrawal from "../../components/StackTabs/Request/Withdrawal";
import Transfer from "../../components/StackTabs/Request/Transfer";

const Request = ({
  token,
  route,
  navigation,
  lang,
  refreshToken,
  getBalances,
}) => {
  const { data } = route.params;

  if (data.type.toLowerCase() === "deposit") {
    return (
      <View style={styles.container}>
        <Deposit
          token={token}
          data={data}
          navigation={navigation}
          lang={lang}
          refreshToken={refreshToken}
        />
      </View>
    );
  } else if (data.type.toLowerCase() === "withdrawal") {
    return (
      <View style={styles.container}>
        <Withdrawal
          token={token}
          data={data}
          navigation={navigation}
          lang={lang}
          refreshToken={refreshToken}
          getBalances={getBalances}
        />
      </View>
    );
  } else if (data.type.toLowerCase() === "transfer") {
    return (
      <View style={styles.container}>
        <Transfer
          data={data}
          lang={lang}
          navigation={navigation}
          token={token}
          refreshToken={refreshToken}
          getBalances={getBalances}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{lang["something-wrong"]}</Text>
      </View>
    );
  }
};

export default Request;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

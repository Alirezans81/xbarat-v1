import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import DepositForm from "./DepositForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import axios from "axios";

const SwitchButtons = ({ transactionType, setTransactionType, lang }) => {
  return (
    <View style={switchButtonsStyles.container}>
      <TouchableOpacity
        onPress={() => setTransactionType("deposit")}
        disabled={transactionType === "deposit"}
        style={[
          switchButtonsStyles.depositButton,
          transactionType !== "deposit"
            ? switchButtonsStyles.enabledButton
            : switchButtonsStyles.disabledButton,
        ]}
      >
        <Text
          style={[
            switchButtonsStyles.depositButtonText,
            transactionType !== "deposit"
              ? switchButtonsStyles.enabledButtonText
              : switchButtonsStyles.disabledButtonText,
          ]}
        >
          {lang["deposit-button-text"]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTransactionType("withdrawal")}
        disabled={transactionType === "withdrawal"}
        style={[
          switchButtonsStyles.withdrawalButton,
          transactionType !== "withdrawal"
            ? switchButtonsStyles.enabledButton
            : switchButtonsStyles.disabledButton,
        ]}
      >
        <Text
          style={[
            switchButtonsStyles.withdrawalButtonText,
            transactionType !== "withdrawal"
              ? switchButtonsStyles.enabledButtonText
              : switchButtonsStyles.disabledButtonText,
          ]}
        >
          {lang["withdrawal-button-text"]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTransactionType("transfer")}
        disabled={transactionType === "transfer"}
        style={[
          switchButtonsStyles.transferButton,
          transactionType !== "transfer"
            ? switchButtonsStyles.enabledButton
            : switchButtonsStyles.disabledButton,
        ]}
      >
        <Text
          style={[
            switchButtonsStyles.transferButtonText,
            transactionType !== "transfer"
              ? switchButtonsStyles.enabledButtonText
              : switchButtonsStyles.disabledButtonText,
          ]}
        >
          {lang["transfer"]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const switchButtonsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
  },
  enabledButton: {
    borderColor: "#999",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  enabledButtonText: {
    color: "#999",
    fontSize: 18,
    fontWeight: "300",
  },
  disabledButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#028BCA",
    backgroundColor: "#028BCA",
  },
  disabledButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
  },
  depositButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  depositButtonText: {},
  withdrawalButton: {
    borderWidth: 0.5,
  },
  withdrawalButtonText: {},
  transferButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  transferButtonText: {},
});

const Forms = ({
  route,
  lang,
  navigation,
  token,
  setLoadingSpinner,
  refreshToken,
}) => {
  const { type, currency, balances } = route.params;
  const [transactionType, setTransactionType] = useState("");
  useEffect(() => {
    setTransactionType(type);
  }, []);

  const api = require("../../../assets/api.json");

  const [currencies, setCurrencies] = useState();
  const getCurrencies = async () => {
    try {
      const result = await axios.get(api["currencies"]);
      setCurrencies(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getCurrencies();
  }, [transactionType]);

  if (transactionType === "deposit") {
    return (
      <View style={styles.container}>
        <SwitchButtons
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          lang={lang}
        />
        <DepositForm
          lang={lang}
          currencies={currencies ? currencies : []}
          navigation={navigation}
          token={token}
          setLoadingSpinner={setLoadingSpinner}
          refreshToken={refreshToken}
        />
      </View>
    );
  } else if (transactionType === "withdrawal") {
    return (
      <View style={styles.container}>
        <SwitchButtons
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          lang={lang}
        />
        <WithdrawalForm
          navigation={navigation}
          currencies={currencies ? currencies : []}
          currency={currency}
          balances={balances}
          lang={lang}
          token={token}
          setLoadingSpinner={setLoadingSpinner}
          refreshToken={refreshToken}
        />
      </View>
    );
  } else if (transactionType === "transfer") {
    return (
      <View style={styles.container}>
        <SwitchButtons
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          lang={lang}
        />
        <TransferForm
          navigation={navigation}
          currencies={currencies ? currencies : []}
          currency={currency}
          balances={balances}
          lang={lang}
          token={token}
          setLoadingSpinner={setLoadingSpinner}
          refreshToken={refreshToken}
        />
      </View>
    );
  } else {
    return <Text>{lang["something-wrong"]}</Text>;
  }
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  typeDropdownButton: {
    width: "70%",
    backgroundColor: "#999",
    borderRadius: 10,
  },
  typeDropdownButtonText: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 20,
  },
  typeDropdown: {
    borderRadius: 10,
  },
  typeDropdownSelectedRow: {
    backgroundColor: "#03A9F4",
  },
  typeDropdownSelectedRowText: {
    color: "#fff",
  },
});

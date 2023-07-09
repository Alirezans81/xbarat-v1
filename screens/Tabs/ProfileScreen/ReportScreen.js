import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import TopButtonTabs from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/TopButtonTabs";
import DepositsTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/DepositsTable";
import WithdrawalsTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/WithdrawalsTable";
import TransfersTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/TransfersTable";
import ExchagesTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/ExchagesTable";
import axios from "axios";

const ReportScreen = ({ lang, token }) => {
  const [type, setType] = useState("deposit");

  const api = require("../../../assets/api.json");

  const [depositReports, setDepositReports] = useState();
  const [withdrawalReports, setWithdrawalReports] = useState();
  const [transferReports, setTransferReports] = useState();
  const [exchangeReports, setExchangeReports] = useState();
  const getReports = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      };
      const deposit = await axios.get(api["deposit-reports"], config);
      const withdrawal = await axios.get(api["withdrawal-reports"], config);
      const transfer = await axios.get(api["transfer-reports"], config);
      const exchange = await axios.get(api["exchange-reports"], config);

      setDepositReports(deposit.data);
      setWithdrawalReports(withdrawal.data);
      setTransferReports(transfer.data);
      setExchangeReports(exchange.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  if (type === "deposit") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView style={styles.TableScrollView}>
          <DepositsTable data={depositReports} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "withdrawal") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView style={styles.TableScrollView}>
          <WithdrawalsTable data={withdrawalReports} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "transfer") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView style={styles.TableScrollView}>
          <TransfersTable data={transferReports} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "exchange") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView style={styles.TableScrollView}>
          <ExchagesTable data={exchangeReports} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView style={styles.TableScrollView}>
          <Text>Somthing wrong!</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TableScrollView: {
    backgroundColor: "#fff",
    minHeight: "88.5%",
  },
});

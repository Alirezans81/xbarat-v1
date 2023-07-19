import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TopButtonTabs from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/TopButtonTabs";
import DepositsTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/DepositsTable";
import WithdrawalsTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/WithdrawalsTable";
import TransfersTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/TransfersTable";
import ExchagesTable from "../../../components/MainScreen/ProfileScreen/Tab/ReportScreen/ExchagesTable";
import axios from "axios";

const ReportScreen = ({ lang, token, stackNavigation, refreshToken }) => {
  const [type, setType] = useState("deposit");

  const api = require("../../../assets/api.json");

  const [depositReports, setDepositReports] = useState();
  const [withdrawalReports, setWithdrawalReports] = useState();
  const [transferReports, setTransferReports] = useState();
  const [exchangeReports, setExchangeReports] = useState();
  const getReports = async () => {
    if (refreshToken()) {
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
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  if (type === "deposit") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <View style={styles.flex1}>
          <ScrollView style={styles.TableScrollView}>
            <DepositsTable
              lang={lang}
              stackNavigation={stackNavigation}
              data={depositReports}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  } else if (type === "withdrawal") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <View style={styles.flex1}>
          <ScrollView style={styles.TableScrollView}>
            <WithdrawalsTable
              lang={lang}
              stackNavigation={stackNavigation}
              data={withdrawalReports}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  } else if (type === "transfer") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <View style={styles.flex1}>
          <ScrollView style={styles.TableScrollView}>
            <TransfersTable
              lang={lang}
              stackNavigation={stackNavigation}
              data={transferReports}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  } else if (type === "exchange") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <View style={styles.flex1}>
          <ScrollView style={styles.TableScrollView}>
            <ExchagesTable
              lang={lang}
              stackNavigation={stackNavigation}
              data={exchangeReports}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} lang={lang} />
        <View style={styles.flex1}>
          <ScrollView style={styles.TableScrollView}>
            <Text>{lang["something-wrong"]}</Text>
          </ScrollView>
        </View>
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
  flex1: {
    height: "90%",
  },
});

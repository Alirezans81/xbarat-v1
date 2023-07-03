import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import TopButtonTabs from "./ReportScreen/TopButtonTabs";
import DepositsTable from "./ReportScreen/DepositsTable";
import WithdrawalsTable from "./ReportScreen/WithdrawalsTable";
import TransfersTable from "./ReportScreen/TransfersTable";
import ExchagesTable from "./ReportScreen/ExchagesTable";

const ReportScreen = ({ lang }) => {
  const [type, setType] = useState("deposit");

  if (type === "deposit") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView>
          <DepositsTable />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "withdrawal") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView>
          <WithdrawalsTable />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "transfer") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView>
          <TransfersTable />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (type === "exchange") {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView>
          <ExchagesTable />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView styles={styles.container}>
        <TopButtonTabs type={type} setType={setType} />
        <ScrollView>
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
});

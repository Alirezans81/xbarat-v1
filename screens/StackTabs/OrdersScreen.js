import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopButtonTabs from "../../components/StackTabs/OrdersScreen/TopButtonTab";
import { useState } from "react";
import Table from "../../components/StackTabs/OrdersScreen/Table";

const OrdersScreen = () => {
  const [type, setType] = useState("open");
  return (
    <View>
      <TopButtonTabs type={type} setType={setType} />
      <Table data={type} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

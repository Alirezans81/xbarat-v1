import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Request = ({ route }) => {
  const { data } = route.params;
  console.log(data);

  return (
    <View>
      <Text>Request</Text>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});

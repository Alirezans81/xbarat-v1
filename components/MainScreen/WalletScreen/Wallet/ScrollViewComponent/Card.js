import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "./Card/Label";
import Buttons from "./Card/Buttons";

const Card = ({ lang, data, stackNavigation, balances }) => {
  return (
    <View style={styles.container}>
      <Label data={data} lang={lang} />
      <Buttons
        lang={lang}
        currency={data.currency}
        balances={balances}
        stackNavigation={stackNavigation}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 250,
    height: 250,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

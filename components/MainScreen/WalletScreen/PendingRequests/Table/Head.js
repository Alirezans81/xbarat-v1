import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import Tooltip from "react-native-walkthrough-tooltip";
import TableInfo from "./Head/TableInfo";

const Head = ({ lang }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.width0}>
        <Tooltip
          isVisible={toolTipVisible}
          content={<TableInfo lang={lang} />}
          placement="top"
          onClose={() => setToolTipVisible(false)}
          horizontalAdjustment={-15}
          topAdjustment={-24}
          contentStyle={styles.hintContent}
        >
          <TouchableOpacity
            style={[styles.width0, styles.hint]}
            onPress={() => setToolTipVisible(true)}
          >
            <Image
              style={styles.hintImage}
              sizeMode="cover"
              source={require("../../../../../assets/App/MainScreen/WalletScreen/hint.png")}
            />
          </TouchableOpacity>
        </Tooltip>
      </View>
      <Text style={[styles.width1, styles.text]}>{lang["pending-type"]}</Text>
      <Text style={[styles.width2, styles.text]}>{lang["currency"]}</Text>
      <Text style={[styles.width3, styles.text]}>{lang["amount"]}</Text>
      <View style={[styles.width4]} />
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    paddingHorizontal: 18,
  },
  text: {
    color: "#999",
  },
  width0: {
    width: "10%",
  },
  width1: {
    width: "22%",
  },
  width2: {
    width: "26%",
  },
  width3: {
    width: "26%",
  },
  width4: {
    width: "8%",
  },
  hint: {
    justifyContent: "flex-end",
  },
  hintContent: {
    backgroundColor: "#4E4E4E",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    minWidth: 170,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  hintImage: {
    height: 15,
    width: 15,
    marginTop: 3,
  },
});

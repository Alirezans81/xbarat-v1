import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WithdrawalStatus = ({ status }) => {
  if (status === "New") {
    return (
      <View style={styles.container}>
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>1</Text>
          <Text style={styles.blueInfo}>Waiting for Assign</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.circle}>
          <Text style={styles.circleText}>2</Text>
          <Text style={styles.info}>Waiting for payment</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.circle}>
          <Text style={styles.circleText}>3</Text>
          <Text style={styles.info}>Accept</Text>
        </View>
      </View>
    );
  } else if (status === "WaitingForPayment") {
    return (
      <View style={styles.container}>
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>1</Text>
          <Text style={styles.blueInfo}>Waiting for Assign</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>2</Text>
          <Text style={styles.blueInfo}>Waiting for payment</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.circle}>
          <Text style={styles.circleText}>3</Text>
          <Text style={styles.info}>Accept</Text>
        </View>
      </View>
    );
  } else if (status === "Accepted") {
    return (
      <View style={styles.container}>
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>1</Text>
          <Text style={styles.blueInfo}>Waiting for Assign</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>2</Text>
          <Text style={styles.blueInfo}>Waiting for payment</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.greenCircle}>
          <Text style={styles.circleText}>3</Text>
          <Text style={styles.greenInfo}>Accept</Text>
        </View>
      </View>
    );
  } else if (status === "Rejected") {
    return (
      <View style={styles.container}>
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>1</Text>
          <Text style={styles.blueInfo}>Waiting for Assign</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.blueCircle}>
          <Text style={styles.circleText}>2</Text>
          <Text style={styles.blueInfo}>Waiting for payment</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.redCircle}>
          <Text style={styles.circleText}>3</Text>
          <Text style={styles.redInfo}>Reject</Text>
        </View>
      </View>
    );
  }
};

export default WithdrawalStatus;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#ccc",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  blueCircle: {
    backgroundColor: "#03A9F4",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  greenCircle: {
    backgroundColor: "#28CD25",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  redCircle: {
    backgroundColor: "#E04B4B",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  circleText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },
  line: {
    height: 2,
    width: "8%",
    backgroundColor: "#ccc",
    borderRadius: 100,
    marginHorizontal: 8,
  },
  info: {
    position: "absolute",
    top: 55,
    textAlign: "center",
    color: "#aaa",
    width: "150%",
    fontWeight: "300",
  },
  blueInfo: {
    position: "absolute",
    top: 55,
    textAlign: "center",
    color: "#03A9F4",
    width: "150%",
    fontWeight: "300",
  },
  greenInfo: {
    position: "absolute",
    top: 55,
    textAlign: "center",
    color: "#28CD25",
    width: "150%",
    fontWeight: "300",
  },
  redInfo: {
    position: "absolute",
    top: 55,
    textAlign: "center",
    color: "#E04B4B",
    width: "150%",
    fontWeight: "300",
  },
});

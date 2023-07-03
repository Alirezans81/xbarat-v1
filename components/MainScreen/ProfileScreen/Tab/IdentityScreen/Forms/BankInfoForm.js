import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Iran from "./BankInfoForm/Iran";
import Afghanistan from "./BankInfoForm/Afqhanistan";
import Others from "./BankInfoForm/Others";

const BankInfoForm = ({
  lang,
  handleChange,
  handleBlur,
  values,
  editable,
  country,
  afghanistanOffices,
  selectedAfghanistanOfficeIndex,
  setSelectedAfghanistanOfficeIndex,
}) => {
  if (country === "iran") {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["bank-information"]}</Text>
        <Iran
          lang={lang}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          editable={editable}
        />
      </View>
    );
  } else if (country === "afghanistan") {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["bank-information"]}</Text>
        <Afghanistan
          lang={lang}
          editable={editable}
          afghanistanOffices={afghanistanOffices}
          selectedAfghanistanOfficeIndex={selectedAfghanistanOfficeIndex}
          setSelectedAfghanistanOfficeIndex={setSelectedAfghanistanOfficeIndex}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["bank-information"]}</Text>
        <Others
          lang={lang}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          editable={editable}
        />
      </View>
    );
  }
};

export default BankInfoForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#bbb",
    marginVertical: 20,
  },
  head: {
    backgroundColor: "#007AC1",
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

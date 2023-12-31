import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopBar = ({ setLoggedIn, lang, setLang, storeAccessToken }) => {
  const [languages, setLanguages] = useState([
    { abb: "EN", id: "ienfejsgbnrsjgbnrsjg" },
    { abb: "FA", id: "ienfejsgbnrsjgbnrsjg" },
  ]);

  const saveLang = async (lang) => {
    await AsyncStorage.setItem("Language", lang).catch((error) => {
      console.log(JSON.stringify(error));
    });
  };

  const langRef = useRef();
  const getLangIndex = async () => {
    await AsyncStorage.getItem("Language")
      .then((result) => {
        const foundIndex = languages.findIndex((e) => e.abb === result);
        foundIndex
          ? langRef.current.selectIndex(foundIndex)
          : langRef.current.selectIndex(0);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  useEffect(() => {
    getLangIndex();
  }, []);

  return (
    <View style={styles.container}>
      <SelectDropdown
        ref={langRef}
        data={languages.map((e) => e.abb)}
        onSelect={(selectedItem, index) => {
          if (selectedItem === "EN") {
            saveLang(selectedItem);
            setLang(require("../../../assets/languages/EN.json"));
          } else if (selectedItem === "FA") {
            saveLang(selectedItem);
            setLang(require("../../../assets/languages/FA.json"));
          }
        }}
        defaultValueByIndex={0}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
        selectedRowStyle={styles.dropdownSelectedRow}
        selectedRowTextStyle={styles.dropdownSelectedRowText}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            storeAccessToken({});
            setLoggedIn(false);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{lang["log-out"]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderWidth: 1,
    borderColor: "#E04B4B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#E04B4B",
  },
  dropdownButton: {
    backgroundColor: "#026897",
    width: 80,
    height: 40,
    borderRadius: 100,
  },
  dropdownButtonText: {
    color: "#fff",
  },
  dropdown: {
    position: "absolute",
    top: 0,
    borderRadius: 10,
    backgroundColor: "#026897",
  },
  dropdownRow: {
    borderBottomWidth: 0,
  },
  dropdownRowText: {
    color: "#fff",
  },
  dropdownSelectedRow: {
    backgroundColor: "#fff",
  },
  dropdownSelectedRowText: {
    color: "#026897",
  },
});

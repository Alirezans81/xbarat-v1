import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";

const Language = ({ setLang }) => {
  const [languages, setLanguages] = useState([
    { abb: "EN", id: "ienfejsgbnrsjgbnrsjg" },
    { abb: "FA", id: "ienfejsgbnrsjgbnrsjg" },
  ]);

  const save = async (lang) => {
    await AsyncStorage.setItem("Language", lang)
      .then((result) => {
        console.log(JSON.stringify(result));
      })
      .catch((error) => {
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
    <SafeAreaView style={styles.container}>
      <SelectDropdown
        ref={langRef}
        data={languages.map((e) => e.abb)}
        onSelect={(selectedItem, index) => {
          if (selectedItem === "EN") {
            save(selectedItem);
            setLang(require("../assets/languages/EN.json"));
          } else if (selectedItem === "FA") {
            save(selectedItem);
            setLang(require("../assets/languages/FA.json"));
          }
        }}
        defaultValueByIndex={0}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.row}
        rowTextStyle={styles.rowText}
        selectedRowStyle={styles.selectedRow}
        selectedRowTextStyle={styles.selectedRowText}
      />
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  button: {
    backgroundColor: "#026897",
    width: 80,
    height: 40,
    left: "2%",
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
  },
  dropdown: {
    position: "absolute",
    top: 0,
    borderRadius: 10,
    backgroundColor: "#026897",
  },
  row: {
    borderBottomWidth: 0,
  },
  rowText: {
    color: "#fff",
  },
  selectedRow: {
    backgroundColor: "#fff",
  },
  selectedRowText: {
    color: "#026897",
  },
});

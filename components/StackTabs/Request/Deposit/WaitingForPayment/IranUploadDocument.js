import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";
import UploadDocument from "../../../../MainScreen/ProfileScreen/Tab/IdentityScreen/UploadDocument";

const IranUploadDocument = ({ token, amount, navigation, lang, depositId }) => {
  const api = require("../../../../../assets/api.json");

  const [dropdownData, setDropdownData] = useState([]);
  const [selectedDropdownDataIndex, setSelectedDropdownDataIndex] = useState();

  const config = {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  };
  const getDropdownData = async () => {
    try {
      const result = await axios.get(api["site-setting"], config);

      if (amount < 100000000) {
        const data = result.data.find(
          (e) => e.name === "iran_cart_destinations"
        );
        const finalData = JSON.parse(data.value.replaceAll(`'`, `"`));

        setDropdownData(finalData);
      } else {
        const data = result.data.find(
          (e) => e.name === "iran_sheba_destinations"
        );
        const finalData = JSON.parse(data.value.replaceAll(`'`, `"`));

        setDropdownData(finalData);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getDropdownData();
  }, []);

  const [canUpload, setCanUpload] = useState(false);

  const [image, setImage] = useState();
  const upload = async () => {
    let filename = image.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append("file", { uri: image, name: filename, type });

    await axios
      .post(
        api["upload-deposit-document-1st"] +
          depositId +
          api["upload-deposit-document-2nd"],
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data; boundary=----",
            Authorization: "Bearer " + token.accessToken,
          },
        }
      )
      .then((result) => {
        submit(result.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  const submit = async (imageFileName) => {
    const params = {
      destination: dropdownData[selectedDropdownDataIndex],
      peymentIdnetity: imageFileName,
    };

    await axios
      .post(
        api["submit-deposit-document-1st"] +
          depositId +
          api["submit-deposit-document-2nd"],
        params,
        config
      )
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={dropdownData}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        selectedRowStyle={styles.dropdownSelectedRow}
        selectedRowTextStyle={styles.dropdownSelectedRowText}
        defaultButtonText={
          amount < 100000000
            ? lang["select-card-number-text"]
            : lang["select-shaba-number-text"]
        }
        onSelect={(e, index) => {
          setSelectedDropdownDataIndex(index);
          setCanUpload(true);
        }}
      />
      <View style={styles.uploadDocumentView}>
        <UploadDocument
          setOuterImage={setImage}
          editable={canUpload}
          lang={lang}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          image && upload();
        }}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>{lang["submit"]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IranUploadDocument;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  dropdownButton: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#999",
    backgroundColor: "#fff",
    width: "80%",
    height: 60,
  },
  dropdownButtonText: {},
  dropdown: {
    borderRadius: 15,
  },
  dropdownSelectedRow: {
    backgroundColor: "#03A9F4",
  },
  dropdownSelectedRowText: {
    color: "#fff",
  },
  uploadDocumentView: {
    width: "80%",
    paddingVertical: 10,
  },
  submitButton: {
    marginVertical: 20,
    width: "80%",
    backgroundColor: "#03A9F4",
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});

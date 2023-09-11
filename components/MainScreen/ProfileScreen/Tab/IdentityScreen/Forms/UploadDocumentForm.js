import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Iran from "./UploadDocumentForm/Iran";
import Afghanistan from "./UploadDocumentForm/Afghanistan";
import Others from "./UploadDocumentForm/Others";

const UploadDocumentForm = ({
  lang,
  handleChange,
  handleBlur,
  values,
  editable,
  nationality,
  setDocument,
}) => {

  if (nationality === "iranian") {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["upload-document"]}</Text>
        <Iran
          lang={lang}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          editable={editable}
          setDocument={setDocument}
        />
      </View>
    );
  } else if (nationality === "afghan") {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["upload-document"]}</Text>
        <Afghanistan
          lang={lang}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          editable={editable}
          setDocument={setDocument}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{lang["upload-document"]}</Text>
        <Others
          lang={lang}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          editable={editable}
          setDocument={setDocument}
        />
      </View>
    );
  }
};

export default UploadDocumentForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#bbb",
    minHeight: 200,
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

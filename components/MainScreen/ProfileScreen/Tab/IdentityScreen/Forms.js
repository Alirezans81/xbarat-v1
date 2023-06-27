import { StyleSheet, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import NationalInfoForm from "./Forms/NationalInfoForm";
import UploadDocumentForm from "./Forms/UploadDocumentForm";
import BankInfoForm from "./Forms/BankInfoForm";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Forms = ({ lang, editable, userInfo }) => {
  // console.log(userInfo);

  const api = require("../../../../../assets/api.json");

  const [countries, setCountries] = useState([]);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState();

  const getCountries = async () => {
    try {
      const result = await axios.get(api["countries"]);

      console.log(result.data);
      setCountries(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    countries.findIndex((e) => e.value === 1);
  }, [countries]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: userInfo ? userInfo.email : "",
          phoneNumber: userInfo ? userInfo.phoneNumber : "",
          firstName: userInfo ? userInfo.firstName : "",
          lastName: userInfo ? userInfo.lastName : "",
          city: userInfo ? userInfo.city : "",
          nationalCode: userInfo ? userInfo.nationalCode : "",
          tazkareNumber: userInfo ? userInfo.tazkareNumber : "",
          passportNumber: userInfo ? userInfo.passportNumber : "",
          document: userInfo ? userInfo.document : "",
          shabaNumber: userInfo ? userInfo.shabaNumber : "",
          cartNumber: userInfo ? userInfo.cartNumber : "",
          preferredOffice: userInfo ? userInfo.preferredOffice : "",
          bankEmail: userInfo ? userInfo.bankEmail : "",
        }}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <PersonalInfoForm
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              userInfo={userInfo}
              editable={editable}
            />
            <NationalInfoForm
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              editable={editable}
              countries={countries}
              selectedCountryIndex={selectedCountryIndex}
              setSelectedCountryIndex={setSelectedCountryIndex}
            />
            <UploadDocumentForm
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              editable={editable}
              userInfo={userInfo}
            />
            <BankInfoForm
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              editable={editable}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import NationalInfoForm from "./Forms/NationalInfoForm";
import UploadDocumentForm from "./Forms/UploadDocumentForm";
import BankInfoForm from "./Forms/BankInfoForm";

const Forms = ({
  lang,
  editable,
  userInfo,
  handleBlur,
  handleChange,
  values,
  nationalities,
  selectedNationalityIndex,
  setSelectedNationalityIndex,
  countries,
  selectedCountryIndex,
  setSelectedCountryIndex,
  cities,
  selectedCityIndex,
  setSelectedCityIndex,
  afghanistanOffices,
  selectedAfghanistanOfficeIndex,
  setSelectedAfghanistanOfficeIndex,
  citiesDropdown,
  token,
}) => {
  return (
    <View style={styles.container}>
      <PersonalInfoForm
        lang={lang}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        userInfo={userInfo}
        editable={editable}
      />
      <NationalInfoForm
        lang={lang}
        editable={editable}
        nationalities={nationalities}
        countries={countries}
        cities={cities}
        citiesDropdownRef={citiesDropdown}
        selectedNationalityIndex={selectedNationalityIndex}
        setSelectedNationalityIndex={setSelectedNationalityIndex}
        selectedCountryIndex={selectedCountryIndex}
        setSelectedCountryIndex={setSelectedCountryIndex}
        selectedCityIndex={selectedCityIndex}
        setSelectedCityIndex={setSelectedCityIndex}
      />
      <UploadDocumentForm
        lang={lang}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        editable={editable}
        userInfo={userInfo}
        nationality={
          nationalities[selectedNationalityIndex]
            ? nationalities[selectedNationalityIndex].title.toLowerCase()
            : ""
        }
        token={token}
      />
      <BankInfoForm
        lang={lang}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        editable={editable}
        country={
          countries[selectedCountryIndex]
            ? countries[selectedCountryIndex].title.toLowerCase()
            : ""
        }
        afghanistanOffices={afghanistanOffices}
        selectedAfghanistanOfficeIndex={selectedAfghanistanOfficeIndex}
        setSelectedAfghanistanOfficeIndex={setSelectedAfghanistanOfficeIndex}
      />
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

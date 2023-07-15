import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Label from "../../../components/MainScreen/ProfileScreen/Tab/IdentityScreen/Label";
import EditButton from "../../../components/MainScreen/ProfileScreen/Tab/IdentityScreen/EditButton";
import Forms from "../../../components/MainScreen/ProfileScreen/Tab/IdentityScreen/Forms";
import { Formik } from "formik";
import axios from "axios";

const IdentityScreen = ({ lang, token, refreshToken, userInfo }) => {
  const [editable, setEditable] = useState(false);

  const api = require("../../../assets/api.json");

  const [nationalities, setNationalities] = useState([
    { title: "Iranian", value: "3F93CEF6-34CF-4005-AAAD-130F1370C805" },
    { title: "German", value: "810A3FE6-AB28-4790-B134-14E3D10CDDA7" },
    { title: "Turkish", value: "55C1C51D-5151-4F44-B1F5-742AD4439969" },
    { title: "Afghan", value: "ADAE4BDF-FB8A-47FE-BD9D-F8BEC3853C77" },
    { title: "Canadian", value: "21D65C65-B33E-474C-B903-FF71A867E3ED" },
  ]);
  const [initialNationalityIndex, setInitalNationalityIndex] = useState();
  const [selectedNationalityIndex, setSelectedNationalityIndex] = useState();
  const [countries, setCountries] = useState([]);
  const [initialCountryIndex, setInitalCountryIndex] = useState();
  const [selectedCountryIndex, setSelectedCountryIndex] = useState();
  const [cities, setCities] = useState([]);
  const [initialCityIndex, setInitalCityIndex] = useState();
  const [selectedCityIndex, setSelectedCityIndex] = useState();
  const [afghanistanOffices, setAfghanistanOffices] = useState([
    {
      title: "Harat",
      address:
        "Harat - Banke Khoon Road - 19th Emam Moslem Street - Beside Tabassom Clinic",
      number: "+945345423",
    },
    {
      title: "Mazar Sharif",
      address:
        "Mazar Sharif - Yalmareb Majidi Station Market - Third House - Room 47",
      number: "+949777569",
    },
  ]);
  const [initialAfghanistanOfficeIndex, setInitalAfghanistanOfficeIndex] =
    useState();
  const [selectedAfghanistanOfficeIndex, setSelectedAfghanistanOfficeIndex] =
    useState();

  const getNationalities = async () => {};
  useEffect(() => {
    getNationalities();
  }, []);

  const findNationalityIndex = () => {
    if (userInfo) {
      const foundIndex = nationalities.findIndex(
        (e) => e.value === userInfo.nationalityId
      );
      setSelectedNationalityIndex(foundIndex);
      setInitalNationalityIndex(foundIndex);
    }
  };
  useEffect(() => {
    findNationalityIndex();
  }, [nationalities]);

  const getCountries = async () => {
    try {
      const result = await axios.get(api["countries"]);

      setCountries(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  const findCountryIndex = () => {
    if (userInfo) {
      const foundIndex = countries.findIndex(
        (e) => e.value === userInfo.countryId
      );
      setSelectedCountryIndex(foundIndex);
      setInitalCountryIndex(foundIndex);
    }
  };
  useEffect(() => {
    findCountryIndex();
  }, [countries]);

  const getCities = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      };
      const result = await axios.get(
        api["cities-1st"] +
          countries[selectedCountryIndex].value +
          api["cities-2nd"],
        config
      );

      setCities(result.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getCities();
  }, [selectedCountryIndex]);

  const findCityIndex = () => {
    const foundIndex = cities.findIndex((e) => e.id === userInfo.cityId);
    setSelectedCityIndex(foundIndex);
    setInitalCityIndex(foundIndex);
  };
  useEffect(() => {
    findCityIndex();
  }, [cities]);

  const citiesDropdown = useRef();
  const refreshCitiesDropdown = () => {
    citiesDropdown.current.reset();
    setSelectedCityIndex(-1);
  };
  useEffect(() => {
    selectedCityIndex !== -1 ? refreshCitiesDropdown() : null;
  }, [selectedCountryIndex]);

  const resetDropdowns = () => {
    setSelectedNationalityIndex(initialNationalityIndex);
    setSelectedCountryIndex(initialCountryIndex);

    getCities();
  };

  const updateProfile = (valeus) => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik
        initialValues={{
          id: userInfo ? userInfo.id : "",
          firstName: userInfo ? userInfo.firstName : "",
          lastName: userInfo ? userInfo.lastName : "",
          phoneNumber: userInfo ? userInfo.phoneNumber : "",
          email: userInfo ? userInfo.email : "",
          nationalCode: userInfo ? userInfo.nationalCode : "",
          tazkareNumber: userInfo ? userInfo.tazkareNumber : "",
          passportNumber: userInfo ? userInfo.passportNumber : "",
          shabaNumber: userInfo ? userInfo.shabaNumber : "",
          cartNumber: userInfo ? userInfo.cartNumber : "",
          bankEmail: userInfo ? userInfo.bankEmail : "",
        }}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
          <>
            <EditButton
              editable={editable}
              setEditable={setEditable}
              resetDropdowns={resetDropdowns}
              resetForm={resetForm}
              handleSubmit={handleSubmit}
            />
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.content}
            >
              <Label lang={lang} userInfo={userInfo} />
              <Forms
                lang={lang}
                editable={editable}
                userInfo={userInfo}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                token={token}
                nationalities={nationalities}
                selectedNationalityIndex={selectedNationalityIndex}
                setSelectedNationalityIndex={setSelectedNationalityIndex}
                countries={countries}
                selectedCountryIndex={selectedCountryIndex}
                setSelectedCountryIndex={setSelectedCountryIndex}
                cities={cities}
                selectedCityIndex={selectedCityIndex}
                setSelectedCityIndex={setSelectedCityIndex}
                afghanistanOffices={afghanistanOffices}
                selectedAfghanistanOfficeIndex={selectedAfghanistanOfficeIndex}
                setSelectedAfghanistanOfficeIndex={
                  setSelectedAfghanistanOfficeIndex
                }
                citiesDropdown={citiesDropdown}
              />
            </ScrollView>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default IdentityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    minHeight: "100%",
  },
});

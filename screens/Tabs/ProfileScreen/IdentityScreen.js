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
    { title: "Iranian", value: "3f93cef6-34cf-4005-aaad-130f1370c805" },
    { title: "German", value: "810a3fe6-ab28-4790-b134-14e3d10cdda7" },
    { title: "Turkish", value: "55c1c51d-5151-4f44-b1f5-742ad4439969" },
    { title: "Afghan", value: "adae4bdf-fb8a-47fe-bd9d-f8bec3853c77" },
    { title: "Canadian", value: "21d65c65-b33e-474c-b903-ff71a867e3ed" },
  ]);
  const [initialNationalityIndex, setInitalNationalityIndex] = useState();
  const [selectedNationalityIndex, setSelectedNationalityIndex] = useState();
  const [countries, setCountries] = useState([]);
  const [initialCountryIndex, setInitalCountryIndex] = useState();
  const [selectedCountryIndex, setSelectedCountryIndex] = useState();
  const [cities, setCities] = useState([]);
  const [initialCityIndex, setInitalCityIndex] = useState();
  const [selectedCityIndex, setSelectedCityIndex] = useState();
  const [afghanistanOffices, setAfghanistanOffices] = useState([]);
  const [initialAfghanistanOfficeIndex, setInitalAfghanistanOfficeIndex] =
    useState();
  const [selectedAfghanistanOfficeIndex, setSelectedAfghanistanOfficeIndex] =
    useState();
  const [document, setDocument] = useState();

  const getAfghanistanOffices = async () => {
    setAfghanistanOffices([
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
  };
  useEffect(() => {
    getAfghanistanOffices();
  }, []);
  const findAfghanistanOfficeIndex = () => {
    if (userInfo) {
      const foundIndex = afghanistanOffices.findIndex(
        (e) => e.address === userInfo.preferredOffice
      );
      setSelectedAfghanistanOfficeIndex(foundIndex);
      setInitalAfghanistanOfficeIndex(foundIndex);
    }
  };
  useEffect(() => {
    findAfghanistanOfficeIndex();
  }, [afghanistanOffices]);

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
    if (refreshToken()) {
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

  const config = {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  };

  const uploadDocument = async () => {
    let filename = document.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append("file", { uri: document, name: filename, type });

    await axios
      .post(api["upload-profile-document"], formData, {
        headers: {
          "Content-Type": "multipart/form-data; boundary=----",
          Authorization: "Bearer " + token.accessToken,
        },
      })
      .then((result) => {})
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  const updateProfile = async (values) => {
    if (refreshToken()) {
      await axios
        .put(api["profile"], values, config)
        .then((result) => {})
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik
        initialValues={{
          id: userInfo && userInfo.id ? userInfo.id : "",
          firstName: userInfo && userInfo.firstName ? userInfo.firstName : "",
          lastName: userInfo && userInfo.lastName ? userInfo.lastName : "",
          phoneNumber:
            userInfo && userInfo.phoneNumber ? userInfo.phoneNumber : "",
          email: userInfo && userInfo.email ? userInfo.email : "",
          nationalCode:
            userInfo && userInfo.nationalCode ? userInfo.nationalCode : "",
          tazkareNumber:
            userInfo && userInfo.tazkareNumber ? userInfo.tazkareNumber : "",
          passportNumber:
            userInfo && userInfo.passportNumber ? userInfo.passportNumber : "",
          shabaNumber:
            userInfo && userInfo.shabaNumber ? userInfo.shabaNumber : "",
          cartNumber:
            userInfo && userInfo.cartNumber ? userInfo.cartNumber : "",
          bankEmail: userInfo && userInfo.bankEmail ? userInfo.bankEmail : "",
          documentFile:
            userInfo && userInfo.documentFile ? userInfo.documentFile : "",
        }}
        onSubmit={(values) => {
          let newValues = values;

          newValues.nationalityId = nationalities[selectedNationalityIndex]
            ? nationalities[selectedNationalityIndex].value
            : "";
          newValues.countryId = countries[selectedCountryIndex]
            ? countries[selectedCountryIndex].value
            : "";
          newValues.cityId = cities[selectedCityIndex]
            ? cities[selectedCityIndex].id
            : "";
          newValues.preferredOffice = afghanistanOffices[
            selectedAfghanistanOfficeIndex
          ]
            ? afghanistanOffices[selectedAfghanistanOfficeIndex].address
            : "";

          uploadDocument();
          updateProfile(newValues);
        }}
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
              <Label lang={lang} token={token} userInfo={userInfo} />
              <Forms
                lang={lang}
                editable={editable}
                userInfo={userInfo}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
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
                setDocument={setDocument}
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

import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import React, { useRef } from "react";
// import MapView, { Marker } from "react-native-maps";

const AboutUsScreen = ({ lang }) => {
  const mapRef = useRef();

  const offices = {
    herat: {
      identifier: "Herat",
      title: lang["herat"],
      address: "جاده عمومی جبریل ودروازه ملک بین توحید ۲ و ۳",
      coordinate: {
        latitude: 34.373909015267,
        longitude: 62.141719993567186,
      },
      officeHead: "محمد نعیم خلیلی",
      phoneNumber: "+93 783846788",
    },
    mazar: {
      identifier: "Mazar",
      title: lang["mazar-sharif"],
      address: "چوک غضنفر ،مهمانسرا بلخ باستان دوکان نمبر 201",
      coordinate: {
        latitude: 36.707661013498985,
        longitude: 67.10407004343202,
      },
      officeHead: "عبد الله حسینی",
      phoneNumber: "+93 791535953",
    },
    kabul: {
      identifier: "Kabul",
      title: lang["kabul"],
      address: "گولایی دواخانه ،کابل مارکت ،طبقه همکف ،دوکان نمبر 04",
      coordinate: {
        latitude: 34.507192696435865,
        longitude: 69.11765590695504,
      },
      officeHead: "عظیم عظیمی",
      phoneNumber: "+93 779074323",
    },
    bamyan: {
      identifier: "Bamyan",
      title: lang["bamyan"],
      address: "بازار بامیان، مارکیت نیک محمد زیر هوتل هایلند دست چپ دکان دوم",
      coordinate: {
        latitude: 34.82560572407869,
        longitude: 67.83875448628329,
      },
      officeHead: "امین عالمی",
      phoneNumber: "+93 795165781",
    },
    mashhad: {
      identifier: "Mashhad",
      title: lang["mashhad"],
      address: "گلشهر ،خیابان شفیعی ،نبش شفیعی 31",
      coordinate: {
        latitude: 36.29418665206291,
        longitude: 59.67360958603482,
      },
      officeHead: "مسعود حیدری",
      phoneNumber: "+98 9028943678",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerView}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/App/MainScreen/ExchangeScreen/logo.png")}
        />
        <Text style={styles.brandDescription}>
          {lang["xbarat-description"] + "."}
        </Text>
        <Text style={styles.label}>{lang["offices"]}</Text>
        {/* <MapView
          ref={mapRef}
          onMapReady={() => {
            mapRef.current.fitToSuppliedMarkers(
              [
                offices.herat.identifier,
                offices.mazar.identifier,
                offices.kabul.identifier,
                offices.bamyan.identifier,
                offices.mashhad.identifier,
              ],
              true
            );
          }}
          style={styles.mapView}
        >
          <Marker
            identifier={offices.herat.identifier}
            title={offices.herat.title}
            description={offices.herat.address}
            coordinate={offices.herat.coordinate}
          />
          <Marker
            identifier={offices.mazar.identifier}
            title={offices.mazar.title}
            description={offices.mazar.address}
            coordinate={offices.mazar.coordinate}
          />
          <Marker
            identifier={offices.kabul.identifier}
            title={offices.kabul.title}
            description={offices.kabul.address}
            coordinate={offices.kabul.coordinate}
          />
          <Marker
            identifier={offices.bamyan.identifier}
            title={offices.bamyan.title}
            description={offices.bamyan.address}
            coordinate={offices.bamyan.coordinate}
          />
          <Marker
            identifier={offices.mashhad.identifier}
            title={offices.mashhad.title}
            description={offices.mashhad.address}
            coordinate={offices.mashhad.coordinate}
          />
        </MapView> */}
        <View style={styles.addressesView}>
          <View style={styles.officeDetailsView}>
            <Text style={styles.h3}>{lang["herat"]}</Text>
            <View style={styles.officeDetailsInnerView}>
              <Text style={styles.text}>
                {lang["full-address"] + ": " + offices.herat.address}
              </Text>
              <View style={styles.flex}>
                <Text style={styles.text}>
                  {lang["office-head"] + ": " + offices.herat.officeHead}
                </Text>
                <Text style={styles.text}>
                  {lang["phone-number"] + ": " + offices.herat.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.officeDetailsView}>
            <Text style={styles.h3}>{lang["mazar"]}</Text>
            <View style={styles.officeDetailsInnerView}>
              <Text style={styles.text}>
                {lang["full-address"] + ": " + offices.mazar.address}
              </Text>
              <View style={styles.flex}>
                <Text style={styles.text}>
                  {lang["office-head"] + ": " + offices.mazar.officeHead}
                </Text>
                <Text style={styles.text}>
                  {lang["phone-number"] + ": " + offices.mazar.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.officeDetailsView}>
            <Text style={styles.h3}>{lang["kabul"]}</Text>
            <View style={styles.officeDetailsInnerView}>
              <Text style={styles.text}>
                {lang["full-address"] + ": " + offices.kabul.address}
              </Text>
              <View style={styles.flex}>
                <Text style={styles.text}>
                  {lang["office-head"] + ": " + offices.kabul.officeHead}
                </Text>
                <Text style={styles.text}>
                  {lang["phone-number"] + ": " + offices.kabul.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.officeDetailsView}>
            <Text style={styles.h3}>{lang["bamyan"]}</Text>
            <View style={styles.officeDetailsInnerView}>
              <Text style={styles.text}>
                {lang["full-address"] + ": " + offices.bamyan.address}
              </Text>
              <View style={styles.flex}>
                <Text style={styles.text}>
                  {lang["office-head"] + ": " + offices.bamyan.officeHead}
                </Text>
                <Text style={styles.text}>
                  {lang["phone-number"] + ": " + offices.bamyan.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.officeDetailsView}>
            <Text style={styles.h3}>{lang["mashhad"]}</Text>
            <View style={styles.officeDetailsInnerView}>
              <Text style={styles.text}>
                {lang["full-address"] + ": " + offices.mashhad.address}
              </Text>
              <View style={styles.flex}>
                <Text style={styles.text}>
                  {lang["office-head"] + ": " + offices.mashhad.officeHead}
                </Text>
                <Text style={styles.text}>
                  {lang["phone-number"] + ": " + offices.mashhad.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerView: {
    paddingHorizontal: 40,
    alignItems: "center",
  },
  brandDescription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "300",
  },
  logoImage: {
    width: 200,
    height: 200,
    marginVertical: 30,
  },
  mapView: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  label: {
    fontSize: 30,
    marginBottom: 10,
  },
  addressesView: {
    marginTop: 30,
    width: "100%",
  },
  officeDetailsView: {
    marginBottom: 20,
    borderWidth: 0.7,
    borderColor: "#aaa",
    borderRadius: 10,
    overflow: "hidden",
  },
  h3: {
    fontSize: 20,
    fontWeight: "300",
    backgroundColor: "#026897",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
  },
  officeDetailsInnerView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    marginVertical: 8,
  },
});

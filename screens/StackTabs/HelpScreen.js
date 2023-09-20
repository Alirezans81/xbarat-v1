import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HelpScreen = ({ lang }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={styles.ScrollViewContentContainer}
      >
        <Text style={styles.head}>{lang["help-1"]}</Text>
        <Text style={styles.normalText}>{lang["help-2"]}</Text>
        <Text style={styles.dotedText}>{lang["help-3"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/1.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-4"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/2.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-5"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/3.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-6"]}</Text>
        <Text style={styles.head}>{lang["help-7"]}</Text>
        <Text style={styles.normalText}>{lang["help-8"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/4.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-9"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/5.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-10"]}</Text>
        <Text style={styles.head}>{lang["help-11"]}</Text>
        <Text style={styles.normalText}>{lang["help-12"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/6.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/7.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-13"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/8.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-14"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/9.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-15"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/10.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-16"]}</Text>
        <Text style={styles.normalText}>{lang["help-17"]}</Text>
        <Text style={styles.normalText}>{lang["help-18"]}</Text>
        <Text style={styles.head}>{lang["help-19"]}</Text>
        <Text style={styles.normalText}>{lang["help-20"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/11.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/12.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-21"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/13.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-22"]}</Text>
        <Text style={styles.normalText}>{lang["help-23"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/14.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-24"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/15.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-25"]}</Text>
        <Text style={styles.normalText}>{lang["help-26"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/16.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-27"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/17.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-28"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/18.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-29"]}</Text>
        <Text style={styles.normalText}>{lang["help-30"]}</Text>
        <Text style={styles.normalText}>{lang["help-31"]}</Text>
        <Text style={styles.head}>{lang["help-32"]}</Text>
        <Text style={styles.normalText}>{lang["help-33"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/19-1.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/19-2.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-34"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/20.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-35"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/21.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-36"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/22.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-37"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/23.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-38"]}</Text>
        <Text style={styles.normalText}>{lang["help-39"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/24.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-40"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/25.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-41"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/28.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-42"]}</Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/29.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-43"]}</Text>
        <Text style={styles.head}>{lang["help-44"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/30.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-45"]}</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/31.png")}
          />
        </View>
        <Text style={styles.dotedText}>{lang["help-46"]}</Text>
      </ScrollView>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ScrollView: {
    flex: 1,
  },
  ScrollViewContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
  },
  head: {
    fontSize: 28,
    fontWeight: "500",
    marginVertical: 15,
    textAlign: "center",
  },
  normalText: {
    fontSize: 16,
    textAlign: "center",
  },
  dotedText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
    marginRight: 10,
  },
  imgView: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  img: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#aaa",
  },
  img2: {
    borderRadius: 15,
    width: "100%",
    marginVertical: -115,
  },
});

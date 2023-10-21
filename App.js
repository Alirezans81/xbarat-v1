import { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignScreen from "./screens/SignScreen";
import "react-native-gesture-handler";
import StackNavigator from "./components/StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "./screens/StackTabs/HelpScreen";

const Stack = createStackNavigator();

export default function App() {
  const [lang, setLang] = useState(require("./assets/languages/EN.json"));
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState({});

  const getLang = async () => {
    await AsyncStorage.getItem("Language")
      .then((result) => {
        if (result === "EN") {
          setLang(require("./assets/languages/EN.json"));
          save("EN");
        } else if (result === "FA") {
          setLang(require("./assets/languages/FA.json"));
          save("FA");
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  useEffect(() => {
    getLang();
  }, []);

  const refreshToken = () => {
    if (new Date(token.expiration) < new Date()) {
      storeAccessToken({})
        .then(() => {
          setLoggedIn(false);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      return false;
    } else {
      return true;
    }
  };

  const storeAccessToken = async (token) => {
    try {
      await AsyncStorage.setItem("Authorization", JSON.stringify(token));
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  const getAccessTokenFromStorage = async () => {
    await AsyncStorage.getItem("Authorization")
      .then((token) => {
        const parsedToken = JSON.parse(token);

        if (parsedToken && new Date(parsedToken.expiration) > new Date()) {
          setToken(parsedToken);
          setLoggedIn(true);

          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  useEffect(() => {
    getAccessTokenFromStorage();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {loggedIn ? (
          <>
            <StatusBar backgroundColor="#eee" barStyle="dark-content" />
            <StackNavigator
              lang={lang}
              setLang={setLang}
              token={token}
              refreshToken={refreshToken}
              setLoggedIn={setLoggedIn}
              storeAccessToken={storeAccessToken}
            />
          </>
        ) : (
          <>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "#03A9F4",
                headerTitleStyle: styles.headerTitle,
              }}
            >
              <Stack.Screen
                options={{ headerShown: false }}
                name="SignScreen"
                children={(props) => (
                  <SignScreen
                    {...props}
                    lang={lang}
                    setLang={setLang}
                    setLoggedIn={setLoggedIn}
                    setToken={setToken}
                    storeAccessToken={storeAccessToken}
                  />
                )}
              />
              <Stack.Screen
                options={{ title: lang["help"] }}
                name="HelpScreen"
                children={(props) => <HelpScreen {...props} lang={lang} />}
              />
            </Stack.Navigator>
          </>
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
  },
});

import { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignScreen from "./screens/SignScreen";
import axios from "axios";
import "react-native-gesture-handler";
import StackNavigator from "./components/StackNavigator";

export default function App() {
  const api = require("./assets/api.json");

  const [lang, setLang] = useState(require("./assets/languages/EN.json"));
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState({});

  const refreshToken = async () => {
    if (new Date(token.expiration) < new Date()) {
      try {
        let config = {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        };
        const result = await axios.post(
          api["refresh-token"],
          token.refreshToken,
          config
        );

        setToken(result.data);
      } catch (error) {
        console.log(JSON.stringify(error));
      }

      return false;
    } else {
      return true;
    }
  };

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
            />
          </>
        ) : (
          <>
            <StatusBar barStyle="light-content" />
            <SignScreen
              lang={lang}
              setLang={setLang}
              setLoggedIn={setLoggedIn}
              setToken={setToken}
            />
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

import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import SignScreen from "./screens/SignScreen";

export default function App() {
  const [lang, setLang] = useState(require("./assets/languages/EN.json"));
  const [loggedIn, setLoggedIn] = useState(true);
  const [token, setToken] = useState({});

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {loggedIn ? (
          <MainScreen lang={lang} setLang={setLang} />
        ) : (
          <SignScreen
            lang={lang}
            setLang={setLang}
            setLoggedIn={setLoggedIn}
            setToken={setToken}
          />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

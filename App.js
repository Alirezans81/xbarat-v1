import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MainScreen from "./screens/MainScreen";
import SignScreen from "./screens/SignScreen";

export default function App() {
  const [lang, setLang] = useState(require("./assets/languages/EN.json"));
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {loggedIn ? (
        <MainScreen lang={lang} setLang={setLang} />
      ) : (
        <SignScreen lang={lang} setLang={setLang} setLoggedIn={setLoggedIn} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Label from "./IdentityScreen/Label";
import EditButton from "./IdentityScreen/EditButton";
import Forms from "./IdentityScreen/Forms";

const IdentityScreen = ({ lang, token, refreshToken, userInfo }) => {
  const [editable, setEditable] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <EditButton lang={lang} editable={editable} setEditable={setEditable} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Label lang={lang} userInfo={userInfo} />
        <Forms lang={lang} editable={editable} userInfo={userInfo} />
      </ScrollView>
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

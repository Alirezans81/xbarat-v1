import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImageModal from "react-native-image-modal";

const UploadDocument = ({
  editable,
  lang,
  setOuterImage,
  initialImage,
  chooseButtonShowJustOnInit,
}) => {
  const [image, setImage] = useState();
  const [imageDimension, setImageDimension] = useState();

  const getImageApi = require("../../../../../assets/api.json")[
    "get-uploaded-profile-document"
  ];

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setOuterImage(result.assets[0].uri);
    }
  };

  const upload = async () => {
    
  };

  useEffect(() => {
    image && upload();
  }, [image]);

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        setImageDimension(event.nativeEvent.layout.width);
      }}
    >
      {(!initialImage || !chooseButtonShowJustOnInit) && (
        <TouchableOpacity
          style={editable ? styles.button : styles.disabledButton}
          onPress={() => {
            pickImage();
          }}
          disabled={!editable}
        >
          <Text
            style={editable ? styles.buttonText : styles.disabledButtonText}
          >
            {lang["upload-your-document"]}
          </Text>
        </TouchableOpacity>
      )}
      {image && (
        <ImageModal
          resizeMode="contain"
          style={[
            styles.image,
            {
              width: imageDimension,
              height: imageDimension,
            },
          ]}
          modalImageStyle={styles.modalImage}
          source={{
            uri: image,
          }}
        />
      )}
      {initialImage && (
        <ImageModal
          resizeMode="contain"
          style={[
            styles.image,
            {
              width: imageDimension,
              height: imageDimension,
            },
          ]}
          modalImageStyle={styles.modalImage}
          source={{
            uri: getImageApi + initialImage,
          }}
        />
      )}
    </View>
  );
};

export default UploadDocument;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 18,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 18,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
  },
  disabledButtonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#888",
  },
  image: {
    borderRadius: 15,
    marginTop: 15,
  },
  modalImage: {
    borderRadius: 20,
  },
});

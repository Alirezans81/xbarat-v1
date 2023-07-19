import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ImageModal from "react-native-image-modal";

const UploadedImage = ({ uri }) => {
  const [imageDimension, setImageDimension] = useState();

  const getImage = async () => {
    try {
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        setImageDimension(event.nativeEvent.layout.width);
      }}
    >
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
        source={{ uri }}
      />
    </View>
  );
};

export default UploadedImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 40,
    marginBottom: 40,
    marginTop: 30,
  },
  image: {
    borderRadius: 15,
  },
  modalImage: {
    borderRadius: 15,
  },
});

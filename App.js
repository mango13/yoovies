import React, { useState } from "react";
import { Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

const cacheImages = (images) =>
    images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1482517716521-3120e5340ed3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      require("./assets/splash.png"),
    ]);
    console.log(images);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
      <Text>Ready!</Text>
  ) : (
      <AppLoading
          startAsync={loadAssets}
          onFinish={onFinish}
          onError={console.error}
      />
  );
}

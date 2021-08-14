import React from "react";
import RootNavigator from "./routes";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  InriaSans_400Regular,
  InriaSans_700Bold,
  RobotoSlab_400Regular,
} from "@expo-google-fonts/dev";

export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_400Regular,
    InriaSans_700Bold,
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <RootNavigator />;
}

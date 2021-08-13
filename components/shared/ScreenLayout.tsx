import React, { ReactNode } from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";

const ScreenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBarExpo style={"light"} backgroundColor="#000" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;

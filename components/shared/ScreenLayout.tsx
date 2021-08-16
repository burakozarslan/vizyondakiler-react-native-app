import React, { ReactNode } from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { SafeAreaView, StatusBar, View } from "react-native";
import tw from "../../lib/tailwind";

const ScreenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#171824",
      }}
    >
      <StatusBarExpo style={"light"} backgroundColor="#000" />
      <View style={tw.style("flex-1")}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenLayout;

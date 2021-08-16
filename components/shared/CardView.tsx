import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import tw from "../../lib/tailwind";

const { width, height } = Dimensions.get("window");

const CardView = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <LinearGradient colors={["#292D3A", "#0E0F1B"]} style={styles.card}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    padding: width * 0.03,
    borderRadius: 10,
    width: width * 0.95,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderBottomColor: "#292D3A",
    borderRightColor: "#292D3A",
  },
});

export default CardView;

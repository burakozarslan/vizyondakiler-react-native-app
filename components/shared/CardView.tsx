import React, { ReactNode } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";

const CardView = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <View style={tw.style("bg-blue-900 mb-3 mx-4 p-2 rounded-lg shadow-2xl")}>
      {children}
    </View>
  );
};

export default CardView;

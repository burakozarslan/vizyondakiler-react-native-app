import React from "react";
import { View, Text, Button } from "react-native";

import { TTheatresScreenProps } from "../types/screenTypes";
import { MOVIES_SCREEN } from "../constants/screenConstants";

const TheatresScreen = ({ navigation, route }: TTheatresScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.url}</Text>
      <Button
        title="Filmleri Gor"
        onPress={() => navigation.navigate(MOVIES_SCREEN, { url: "url" })}
      />
    </View>
  );
};

export default TheatresScreen;

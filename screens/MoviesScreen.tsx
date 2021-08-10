import React from "react";
import { View, Text, Button } from "react-native";

import { TMoviesScreenProps } from "../types/screenTypes";
import { MOVIE_DETAILS_SCREEN } from "../constants/screenConstants";

const MoviesScreen = ({ navigation }: TMoviesScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Movies Screen</Text>
      <Button
        title="Filmin Detaylarini Gor"
        onPress={() => navigation.navigate(MOVIE_DETAILS_SCREEN, { url: "" })}
      />
    </View>
  );
};

export default MoviesScreen;

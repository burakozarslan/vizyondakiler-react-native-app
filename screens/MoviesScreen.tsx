import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { TMoviesScreenProps } from "../types/screenTypes";
import { MOVIE_DETAILS_SCREEN } from "../constants/screenConstants";
import ScreenLayout from "../components/shared/ScreenLayout";
import CardView from "../components/shared/CardView";

const MoviesScreen = ({ navigation }: TMoviesScreenProps) => {
  return (
    <ScreenLayout>
      <TouchableOpacity
        onPress={() => navigation.navigate(MOVIE_DETAILS_SCREEN, { url: "" })}
      >
        <CardView>
          <Text>Movies Screen</Text>
        </CardView>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default MoviesScreen;

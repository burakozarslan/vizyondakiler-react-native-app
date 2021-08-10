import React from "react";
import { View, Text } from "react-native";

import { TMovieDetailsScreenProps } from "../types/screenTypes";

const MovieDetails = ({ route }: TMovieDetailsScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Movie Details Screen</Text>
    </View>
  );
};

export default MovieDetails;

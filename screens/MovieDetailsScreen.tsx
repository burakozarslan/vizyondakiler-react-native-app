import React from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";

import { TMovieDetailsScreenProps } from "../types/screenTypes";
import ScreenLayout from "../components/ScreenLayout";

const MovieDetails = ({ route }: TMovieDetailsScreenProps) => {
  return (
    <ScreenLayout>
      <View style={[t.flex1, t.bgGray900]}>
        <Text>Movie Details</Text>
      </View>
    </ScreenLayout>
  );
};

export default MovieDetails;

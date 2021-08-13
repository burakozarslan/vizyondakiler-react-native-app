import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

import { TMovieDetailsScreenProps } from "../types/screenTypes";
import ScreenLayout from "../components/ScreenLayout";

const MovieDetails = ({ route }: TMovieDetailsScreenProps) => {
  return (
    <ScreenLayout>
      <View style={tw.style(`flex-1`, `bg-black`)}>
        <View style={tw.style(`h-1/2`)}>
          <View style={tw.style(`flex-1`)}>
            <Image
              style={tw.style(`flex-1`, { resizeMode: "cover" })}
              source={{
                uri: "https://hdizlefilmleri.com/wp-content/uploads/2020/10/kod-adi-angel-2018-turkce-dublaj-720p.jpg",
              }}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default MovieDetails;

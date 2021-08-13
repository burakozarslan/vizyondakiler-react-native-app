import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

import ScreenLayout from "../components/ScreenLayout";
import { TMovieDetailsScreenProps } from "../types/screenTypes";
import { TArtist } from "../types/dataTypes";

// dummy data
import { movieDetail } from "../data/movieDetails";

const StyledText = ({ children }: { children: string }): JSX.Element => {
  return <Text style={tw.style("text-white")}>{children}</Text>;
};

const Pill = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <View style={tw.style("mr-1", "bg-green-900", "px-1", "py-px", "rounded")}>
      {children}
    </View>
  );
};

const Artist = ({ name, image }: TArtist): JSX.Element => {
  return (
    <View style={tw.style("w-20 h-36 mr-2")}>
      <View style={tw.style("h-28")}>
        <Image
          style={tw.style("w-full h-full", { resizeMode: "cover" })}
          source={{ uri: image }}
        />
      </View>
      <Text style={tw.style("text-white text-xs ml-1")}>{name}</Text>
    </View>
  );
};

const renderArtist = (artist: TArtist) => {
  return <Artist name={artist.name} image={artist.image} />;
};

const MovieDetailsScreen = ({ route }: TMovieDetailsScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={tw.style("flex-1", {
          backgroundColor: "#222",
        })}
      >
        {/* Upper Half */}
        <View style={tw.style("h-1/2")}>
          <View style={tw.style("flex-1")}>
            {/* Movie Poster */}
            <Image
              blurRadius={0.5}
              style={tw.style("flex-1 rounded-lg", { resizeMode: "cover" })}
              source={{
                uri: movieDetail.poster,
              }}
            />
          </View>
          <View
            style={tw.style(
              "absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center",
              {
                backgroundColor: "rgba(0,0,0,.4)",
              }
            )}
          >
            <Ionicons name="play-circle" size={80} color="orange" />
          </View>
        </View>
        {/* Bottom Half */}
        <View style={tw.style("flex-1 px-3")}>
          {/* Banner */}
          <View
            style={tw.style(
              `flex-row`,
              "items-center",
              "justify-between",
              "py-2"
            )}
          >
            {/* Pills Container */}
            <View
              style={tw.style(
                "flex-row justify-between items-center flex-wrap"
              )}
            >
              {movieDetail.categories.map((cat, index) => {
                return (
                  <Pill key={index}>
                    <StyledText>{cat}</StyledText>
                  </Pill>
                );
              })}
            </View>
            <View>
              <Text style={tw.style("text-yellow-500", "font-bold")}>
                2020 - ABD
              </Text>
            </View>
          </View>
          {/* Movie Title */}
          <Text style={tw.style("text-xl text-white mt-1")}>
            {movieDetail.title}
          </Text>
          {/* Movie Description */}
          <ScrollView style={tw.style("flex-1 mt-2")}>
            <Text style={tw.style("text-white text-sm")}>
              {movieDetail.description}
            </Text>
          </ScrollView>
          {/* Cast */}
          <View style={tw.style("py-3 flex-row")}>
            <FlatList
              data={movieDetail.cast}
              renderItem={({ item }: { item: TArtist }) => renderArtist(item)}
              keyExtractor={(_, index) => String(index)}
              horizontal={true}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default MovieDetailsScreen;

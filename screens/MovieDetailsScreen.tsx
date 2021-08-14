import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "../lib/tailwind";
import * as Linking from "expo-linking";

import { Ionicons } from "@expo/vector-icons";

import ScreenLayout from "../components/shared/ScreenLayout";
import { TMovieDetailsScreenProps } from "../types/screenTypes";
import { TArtist } from "../types/dataTypes";

// dummy data
import { movieDetail } from "../data/movieDetails";

const StyledText = ({ children }: { children: string }): JSX.Element => {
  return <Text style={tw.style("text-white text-xs")}>{children}</Text>;
};

const Pill = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <View
      style={tw.style("mr-1", "bg-pink-900 px-1 py-px rounded drop-shadow-2xl")}
    >
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

const handleOpenLink = (url: string) => {
  Linking.openURL(url);
};

const MovieDetailsScreen = ({ route }: TMovieDetailsScreenProps) => {
  return (
    <ScreenLayout>
      {/* Upper Half */}
      <View style={tw.style("h-1/2")}>
        <View style={tw.style("flex-1")}>
          {/* Movie Poster */}
          <Image
            blurRadius={0.5}
            style={tw.style("flex-1 rounded-lg", {
              resizeMode: "cover",
            })}
            source={{
              uri: movieDetail.poster,
            }}
          />
        </View>
        <View
          style={tw.style(
            "absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center",
            {
              backgroundColor: "rgba(0,0,0,.6)",
            }
          )}
        >
          {/* Play Button */}
          <TouchableOpacity onPress={() => handleOpenLink(movieDetail.trailer)}>
            <Ionicons
              name="play-circle"
              size={80}
              style={tw.style("text-pink-900")}
            />
          </TouchableOpacity>
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
            style={tw.style("flex-row justify-between items-center flex-wrap")}
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
            <Text style={tw.style("text-pink-900", "font-bold")}>
              2020 - ABD
            </Text>
          </View>
        </View>
        {/* Movie Title */}
        <Text
          style={tw.style("text-2xl text-white mt-1", {
            fontFamily: "InriaSans_400Regular",
          })}
        >
          {movieDetail.title}
        </Text>
        {/* Movie Description */}
        <ScrollView style={tw.style("flex-1 mt-2")}>
          <Text
            style={tw.style("text-white text-sm tracking-wide", {
              fontFamily: "InriaSans_400Regular",
            })}
          >
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
    </ScreenLayout>
  );
};

export default MovieDetailsScreen;

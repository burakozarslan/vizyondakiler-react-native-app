import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import {
  CITIES_SCREEN,
  THEATRES_SCREEN,
  MOVIES_SCREEN,
  MOVIE_DETAILS_SCREEN,
} from "../constants/screenConstants";

export type TRootStackParamList = {
  CitiesScreen: undefined;
  TheatresScreen: { url: string };
  MoviesScreen: { url: string };
  MovieDetailsScreen: { url: string };
};

type TCitiesScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  typeof CITIES_SCREEN
>;

export type TTheatresScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  typeof THEATRES_SCREEN
>;

type TTheatresScreenRouteProp = RouteProp<
  TRootStackParamList,
  typeof THEATRES_SCREEN
>;

export type TMoviesScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  typeof MOVIES_SCREEN
>;

type TMoviesScreenRouteProp = RouteProp<
  TRootStackParamList,
  typeof MOVIES_SCREEN
>;

type TMovieDetailsScreenRouteProp = RouteProp<
  TRootStackParamList,
  typeof MOVIE_DETAILS_SCREEN
>;

export type TMovieDetailsScreenProps = {
  route: TMovieDetailsScreenRouteProp;
};

export type TCitiesScreenProps = {
  navigation: TCitiesScreenNavigationProp;
};

export type TTheatresScreenProps = {
  route: TTheatresScreenRouteProp;
  navigation: TTheatresScreenNavigationProp;
};

export type TMoviesScreenProps = {
  route: TMoviesScreenRouteProp;
  navigation: TMoviesScreenNavigationProp;
};

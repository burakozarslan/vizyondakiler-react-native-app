import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

type TTheatresScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  typeof THEATRES_SCREEN
>;

type TMoviesScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  typeof MOVIES_SCREEN
>;

export type TCitiesScreenProps = {
  navigation: TCitiesScreenNavigationProp;
};

export type TTheatresScreenProps = {
  navigation: TTheatresScreenNavigationProp;
};

export type TMoviesScreenProps = {
  navigation: TMoviesScreenNavigationProp;
};

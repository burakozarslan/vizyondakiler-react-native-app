import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import tw from "../lib/tailwind";

import {
  TMoviesScreenNavigationProp,
  TMoviesScreenProps,
} from "../types/screenTypes";
import { MOVIE_DETAILS_SCREEN } from "../constants/screenConstants";
import ScreenLayout from "../components/shared/ScreenLayout";
import CardView from "../components/shared/CardView";
import { TMovie } from "../types/dataTypes";

import fetchMovies from "../network/fetchMovies";

const { height, width } = Dimensions.get("window");

const Pill = ({ time }: { time: string }): JSX.Element => {
  return (
    <Text
      style={tw.style(
        "text-pink-900 rounded-lg border-2 border-pink-900 font-bold",
        {
          paddingHorizontal: width * 0.015,
          paddingVertical: width * 0.005,
          marginRight: width * 0.008,
          marginTop: width * 0.008,
        }
      )}
    >
      {time}
    </Text>
  );
};

const DisplayMessage = ({ message }: { message: string }): JSX.Element => {
  return (
    <Text
      style={{
        fontFamily: "InriaSans_400Regular",
        fontSize: width * 0.05,
        color: "white",
      }}
    >
      {message}
    </Text>
  );
};

const RenderMovie = ({
  item,
  navigation,
}: {
  item: TMovie;
  navigation: TMoviesScreenNavigationProp;
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(MOVIE_DETAILS_SCREEN, { url: item.url })
      }
    >
      <CardView>
        <View style={tw.style("flex-row")}>
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
          {/* Top Container */}
          <View
            style={{
              paddingTop: width * 0.03,
              paddingLeft: width * 0.05,
              flex: 1,
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.originalTitle}</Text>
            <Text style={styles.text}>Tur: {item.categories.join(", ")}</Text>
          </View>
        </View>
        {/* Bottom Container */}
        <View
          style={{
            paddingVertical: width * 0.03,
          }}
        >
          {item.sessions.map((session, index) => {
            return (
              <View key={index}>
                <Text
                  style={{
                    fontSize: width * 0.04,
                    color: "white",
                    marginTop: width * 0.02,
                  }}
                >
                  {session.type}
                </Text>
                <View
                  style={tw.style("flex-wrap flex-row items-center", {
                    paddingTop: width * 0.025,
                  })}
                >
                  {session.times.map((time, index) => {
                    return <Pill key={index} time={time} />;
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </CardView>
    </TouchableOpacity>
  );
};

const MoviesScreen = ({ navigation, route }: TMoviesScreenProps) => {
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [noResults, setNoResults] = React.useState(false);

  React.useEffect(() => {
    fetchMovies(route.params.url)
      .then((data) => {
        if (data.length === 0) setNoResults(true);
        setMovies(data);
      })
      .catch((e) => setError(e.message));
    setLoading(false);
  }, []);

  return (
    <ScreenLayout>
      <View style={styles.screen}>
        {error && <DisplayMessage message="Bir hata olustu." />}
        {loading && <DisplayMessage message="Lutfen bekleyin..." />}
        {noResults && (
          <DisplayMessage message="Bu salonda film gosterilmiyor." />
        )}
        <FlatList
          data={movies}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }: { item: TMovie }) => (
            <RenderMovie item={item} navigation={navigation} />
          )}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#171824",
    paddingTop: height * 0.05,
  },
  image: {
    borderRadius: 5,
    width: width * 0.2,
    height: width * 0.3,
  },
  title: {
    color: "white",
    fontFamily: "Inter_400Regular",
    fontSize: width * 0.045,
  },
  subTitle: {
    color: "white",
    fontFamily: "InriaSans_400Regular",
    fontSize: width * 0.04,
  },
  text: {
    color: "white",
    fontFamily: "InriaSans_400Regular",
    fontSize: width * 0.04,
    marginTop: width * 0.02,
  },
});

export default MoviesScreen;

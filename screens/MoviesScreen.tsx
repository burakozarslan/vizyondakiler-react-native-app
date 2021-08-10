import React from "react";
import { View, Text, Button } from "react-native";

const MoviesScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Movies Screen</Text>
      <Button
        title="Filmin Detaylarini Gor"
        onPress={() => navigation.navigate("MovieDetailsScreen")}
      />
    </View>
  );
};

export default MoviesScreen;

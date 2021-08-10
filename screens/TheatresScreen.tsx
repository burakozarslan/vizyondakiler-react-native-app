import React from "react";
import { View, Text, Button } from "react-native";

const TheatresScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theatres Screen</Text>
      <Button
        title="Filmleri Gor"
        onPress={() => navigation.navigate("MoviesScreen")}
      />
    </View>
  );
};

export default TheatresScreen;

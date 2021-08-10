import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CitiesScreen,
  TheatresScreen,
  MoviesScreen,
  MovieDetailsScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CitiesScreen" component={CitiesScreen} />
        <Stack.Screen name="TheatresScreen" component={TheatresScreen} />
        <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

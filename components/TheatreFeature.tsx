import React from "react";
import { View } from "react-native";

import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

import { TTheatreFeatureProps } from "../types/dataTypes";
import {
  THREE_D,
  AIR_CONDITIONER,
  RESTAURANT,
  DOLBY,
  PHONE_RESERVATION,
  PARKING,
} from "../constants/featureConstants";

type TCheckOrCrossProps = {
  isCheck: boolean;
  size: number;
};

const CheckOrCross = ({ isCheck, size }: TCheckOrCrossProps) => {
  if (isCheck)
    return (
      <Entypo
        style={{ marginTop: 5 }}
        name="check"
        size={size - 5}
        color="green"
      />
    );
  return (
    <Entypo style={{ marginTop: 5 }} name="cross" size={size} color="red" />
  );
};

const TheatreFeature = ({
  name,
  color,
  size,
  isAvailable,
}: TTheatreFeatureProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {name === THREE_D && (
        <Ionicons name="glasses-sharp" size={size} color={color} />
      )}
      {name === AIR_CONDITIONER && (
        <FontAwesome5 name="snowflake" size={size} color={color} />
      )}
      {name === RESTAURANT && (
        <Ionicons name="restaurant" size={size} color={color} />
      )}
      {name === DOLBY && (
        <MaterialCommunityIcons name="dolby" size={size} color={color} />
      )}
      {name === PHONE_RESERVATION && (
        <FontAwesome5 name="phone-square" size={size} color={color} />
      )}
      {name === PARKING && (
        <FontAwesome5 name="parking" size={size} color={color} />
      )}
      <CheckOrCross isCheck={isAvailable} size={size} />
    </View>
  );
};

export default TheatreFeature;

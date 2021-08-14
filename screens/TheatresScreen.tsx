import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { t } from "react-native-tailwindcss";
import tw from "../lib/tailwind";
import ScreenLayout from "../components/shared/ScreenLayout";

import { default as TheatreFeature } from "../components/TheatreFeature";

import {
  TTheatresScreenProps,
  TTheatresScreenNavigationProp,
} from "../types/screenTypes";
import { TTheatre } from "../types/dataTypes";

import { MOVIES_SCREEN } from "../constants/screenConstants";
import { theatres as theatresData } from "../data/theatres";

import {
  THREE_D,
  AIR_CONDITIONER,
  RESTAURANT,
  DOLBY,
  PHONE_RESERVATION,
  PARKING,
} from "../constants/featureConstants";
import CardView from "../components/shared/CardView";

const { width, height } = Dimensions.get("window");

const RenderItem = ({
  item,
  navigation,
}: {
  item: TTheatre;
  navigation: TTheatresScreenNavigationProp;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MOVIES_SCREEN, { url: "" })}
    >
      <CardView>
        <Text
          style={tw.style("text-white text-lg", {
            fontFamily: "RobotoSlab_400Regular",
          })}
        >
          {item.title}
        </Text>
        <View style={{ height: height * 0.18, marginTop: height * 0.01 }}>
          <Text
            style={{
              fontFamily: "InriaSans_400Regular",
              color: "white",
            }}
          >
            {" "}
            <Text>Adres:</Text> {item.address}
          </Text>
          <Text
            style={tw.style("text-white mt-1", {
              fontFamily: "InriaSans_400Regular",
            })}
          >
            {" "}
            <Text style={tw.style("text-white")}>Telefon:</Text> {item.tel}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TheatreFeature
              name={THREE_D}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.three_d}
            />
            <TheatreFeature
              name={AIR_CONDITIONER}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.aircond}
            />
            <TheatreFeature
              name={RESTAURANT}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.restaurant}
            />
            <TheatreFeature
              name={DOLBY}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.dolby}
            />
            <TheatreFeature
              name={PHONE_RESERVATION}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.phone_res}
            />
            <TheatreFeature
              name={PARKING}
              color="#E9EDF7"
              size={24}
              isAvailable={item.features.parking}
            />
          </View>
          <Text
            style={{
              alignSelf: "flex-end",
              color: "#EBB026",
              fontWeight: "normal",
              fontFamily: "InriaSans_400Regular",
            }}
          >
            Filmleri Gormek Icin Tikla
          </Text>
        </View>
      </CardView>
    </TouchableOpacity>
  );
};

const TheatresScreen = ({ navigation, route }: TTheatresScreenProps) => {
  const [theatres, setTheatres] = React.useState(theatresData);

  return (
    <ScreenLayout>
      <LinearGradient
        colors={["#171824", "#171824"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.screen}
      >
        <FlatList
          data={theatres}
          renderItem={({ item }) => (
            <RenderItem item={item} navigation={navigation} />
          )}
          keyExtractor={(_, index) => String(index)}
        />
      </LinearGradient>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#292D3A",
    paddingTop: height * 0.05,
  },
});

export default TheatresScreen;

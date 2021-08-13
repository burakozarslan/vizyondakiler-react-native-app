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
      <View
        // colors={["#222", "#333"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
        // style={{
        //   marginBottom: height * 0.01,
        //   marginHorizontal: width * 0.05,
        //   padding: width * 0.025,
        //   borderRadius: 10,
        // }}
        style={[t.bgGray900, t.mB3, t.mX4, t.p2, t.roundedLg, t.shadowLg]}
      >
        <Text
          style={{
            color: "#E9EDF7",
            fontSize: width * 0.05,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <View style={{ height: height * 0.18, marginTop: height * 0.01 }}>
          <Text style={{ color: "#E9EDF7" }}>
            {" "}
            <Text style={{ fontWeight: "bold" }}>Adres:</Text> {item.address}
          </Text>
          <Text style={{ color: "#E9EDF7" }}>
            {" "}
            <Text style={{ fontWeight: "bold" }}>Telefon:</Text> {item.tel}
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
              fontWeight: "bold",
            }}
          >
            Filmleri Gormek Icin Tikla
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TheatresScreen = ({ navigation, route }: TTheatresScreenProps) => {
  const [theatres, setTheatres] = React.useState(theatresData);

  return (
    <ScreenLayout>
      <LinearGradient
        colors={["#222", "#222"]}
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

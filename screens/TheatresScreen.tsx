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
import fetchTheatres from "../network/fetchTheatres";

import {
  TTheatresScreenProps,
  TTheatresScreenNavigationProp,
} from "../types/screenTypes";
import { TTheatre } from "../types/dataTypes";

import { MOVIES_SCREEN } from "../constants/screenConstants";

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
      onPress={() => navigation.navigate(MOVIES_SCREEN, { url: item.url })}
    >
      <CardView>
        <Text
          style={tw.style("text-white text-xl", {
            fontFamily: "Inter_400Regular",
          })}
        >
          {item.title}
        </Text>
        <View style={{ height: height * 0.18, marginTop: height * 0.01 }}>
          {item.address !== "" && (
            <Text
              style={{
                fontFamily: "InriaSans_400Regular",
                color: "white",
              }}
            >
              Adres: {item.address}
            </Text>
          )}
          {item.tel !== "" && (
            <Text
              style={tw.style("text-white mt-1", {
                fontFamily: "InriaSans_400Regular",
              })}
            >
              Telefon: {item.tel}
            </Text>
          )}
          <View
            style={tw.style(
              "flex-1 justify-between items-center flex-row mt-4"
            )}
          >
            <TheatreFeature
              name={THREE_D}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.three_d}
            />
            <TheatreFeature
              name={AIR_CONDITIONER}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.aircond}
            />
            <TheatreFeature
              name={RESTAURANT}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.restaurant}
            />
            <TheatreFeature
              name={DOLBY}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.dolby}
            />
            <TheatreFeature
              name={PHONE_RESERVATION}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.phone_res}
            />
            <TheatreFeature
              name={PARKING}
              color="#E9EDF7"
              size={20}
              isAvailable={item.features.parking}
            />
          </View>
          <Text
            style={{
              alignSelf: "flex-end",
              color: "#EBB026",
              fontFamily: "InriaSans_400Regular",
              marginTop: 5,
            }}
          >
            Filmleri Gormek Icin Tikla
          </Text>
        </View>
      </CardView>
    </TouchableOpacity>
  );
};

const ListEmptyComponent = () => {
  return (
    <Text
      style={{
        fontFamily: "InriaSans_400Regular",
        fontSize: width * 0.05,
        color: "white",
      }}
    >
      Lutfen Bekleyiniz...
    </Text>
  );
};

const TheatresScreen = ({ navigation, route }: TTheatresScreenProps) => {
  const [theatres, setTheatres] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
    fetchTheatres(route.params.url)
      .then((data) => setTheatres(data))
      .catch((e) => setError(e.message));
  });

  return (
    <ScreenLayout>
      <LinearGradient
        colors={["#171824", "#171824"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.screen}
      >
        {error ? (
          <Text
            style={{
              fontFamily: "InriaSans_400Regular",
              fontSize: width * 0.05,
              color: "white",
            }}
          >
            Bir hata olustu. Lutfen yeniden deneyin.
          </Text>
        ) : (
          <FlatList
            data={theatres}
            renderItem={({ item }) => (
              <RenderItem item={item} navigation={navigation} />
            )}
            keyExtractor={(_, index) => String(index)}
            ListEmptyComponent={<ListEmptyComponent />}
          />
        )}
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

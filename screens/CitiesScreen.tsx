import React, { useState } from "react";
import {
  View,
  Button,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { TCitiesScreenProps } from "../types/screenTypes";
import { THEATRES_SCREEN } from "../constants/screenConstants";

import ScreenLayout from "../components/shared/ScreenLayout";

import { cities } from "../data/cities";

const { width } = Dimensions.get("window");

const CitiesScreen = ({ navigation }: TCitiesScreenProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([...cities]);

  return (
    <ScreenLayout>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <DropDownPicker
          placeholder={"Sehir Seciniz"}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxHeight={300}
          style={{
            backgroundColor: "#222",
            borderColor: "rgb(131, 24, 67)",
            borderWidth: 2,
          }}
          textStyle={{
            color: "rgb(131, 24, 67)",
            fontSize: width * 0.045,
            fontFamily: "InriaSans_400Regular",
          }}
          labelStyle={{
            fontSize: width * 0.06,
            fontFamily: "InriaSans_400Regular",
          }}
          containerStyle={{
            padding: width * 0.02,
          }}
          dropDownContainerStyle={{
            backgroundColor: "#222",
          }}
        />
        <StyledButton
          onPress={() => navigation.navigate(THEATRES_SCREEN, { url: value })}
        />
      </View>
    </ScreenLayout>
  );
};

const StyledButton = ({ ...props }) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={{
          backgroundColor: "rgb(131, 24, 67)",
          paddingHorizontal: width * 0.03,
          paddingVertical: width * 0.02,
          marginTop: width * 0.05,
          borderRadius: 3,
        }}
      >
        <Text
          style={{
            fontSize: width * 0.05,
            color: "white",
            fontFamily: "InriaSans_400Regular",
          }}
        >
          SALONLARI GOR
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CitiesScreen;

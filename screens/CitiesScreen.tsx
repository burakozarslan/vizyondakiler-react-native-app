import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";

import { TCitiesScreenProps } from "../types/screenTypes";
import { THEATRES_SCREEN } from "../constants/screenConstants";

import { cities } from "../data/cities";

const CitiesScreen = ({ navigation }: TCitiesScreenProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([...cities]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Vizyondakiler App</Text>
      <StatusBar style="dark" />
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
        }}
        textStyle={{
          color: "white",
        }}
        labelStyle={{
          fontWeight: "bold",
          fontSize: 20,
        }}
        containerStyle={{
          padding: 5,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#333",
        }}
      />
      <Button
        title="Salonlari Gor"
        disabled={value === "" ? true : false}
        onPress={() => navigation.navigate(THEATRES_SCREEN, { url: value })}
      />
    </View>
  );
};

export default CitiesScreen;

import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";

import { TCitiesScreenProps } from "../types/screenTypes";
import { THEATRES_SCREEN } from "../constants/screenConstants";

const CitiesScreen = ({ navigation }: TCitiesScreenProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Istanbul (Avrupa)", value: "istanbul_avrupa" },
    { label: "Adana", value: "adana" },
  ]);

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
        onPress={() => navigation.navigate(THEATRES_SCREEN, { url: "" })}
      />
    </View>
  );
};

export default CitiesScreen;

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Istanbul (Avrupa)", value: "istanbul_avrupa" },
    { label: "Adana", value: "adana" },
  ]);

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { Button } from "react-native";

export default function Btn(props) {
  return (
    <Button onPress={() => console.warn("Button clicked")} title="Executar" />
  );
}

import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";

export default function Aleatorio(props) {
  const { min, max } = props;
  const delta = max - min + 1;
  const random = parseInt(Math.random() * delta) + min;
  return <Text style={estilo.textoGrande}>Random number: {random}</Text>;
}

import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";

export default function Frag(props) {
  return (
    <View>
      <Text style={estilo.textoGrande}>{props.principal}</Text>
      <Text style={estilo.textoPequeno}>{props.secundario}</Text>
    </View>
  );
}

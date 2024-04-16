import React from "react";
import { StyleSheet, View, Text } from "react-native";
import estilo from "./estilo";

export default function Primeiro() {
  return (
    <View>
      <Text style={estilo.textoGrande}>Primeiro componente</Text>
    </View>
  );
}


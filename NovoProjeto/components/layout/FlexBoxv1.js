import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={estilo.FlexV1}>
      <Quadrado color="#F00" />
      <Quadrado color="#0F0" />
      <Quadrado color="#00F" />
      <Quadrado color="#F00" />
      <Quadrado color="#0F0" />
      <Quadrado color="#00F" />
    </View>
  );
};

const estilo = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },
});

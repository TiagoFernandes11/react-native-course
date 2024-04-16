import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function Comp() {
  return <Text style={estilo.textoGrande}> Comp 00</Text>;
}
function Comp1() {
  return <Text style={estilo.textoGrande}> Comp 01</Text>;
}
function Comp2() {
  return <Text style={estilo.textoGrande}> Comp 02</Text>;
}

export { Comp1, Comp2 };

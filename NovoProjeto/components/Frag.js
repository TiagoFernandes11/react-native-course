import React from "react";
import { Fragment, Text } from "react-native";
import estilo from "./estilo";

export default function Frag(props) {
  return (
    <React.Fragment>
      <Text style={estilo.textoGrande}>{props.principal}</Text>
      <Text style={estilo.textoPequeno}>{props.secundario}</Text>
    </React.Fragment>
  );
}

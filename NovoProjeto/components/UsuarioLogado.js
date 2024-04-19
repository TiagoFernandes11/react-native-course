import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";
import If from "./if";

export default ({ usuario = {} }) => {
  return (
    <If test={usuario && Object.keys(usuario).length != 0}>
    <Text style={estilo.textoGrande}>
      Usuario Logado: {"\n"}
      {usuario.nome} {usuario.sobrenome}
    </Text>
    </If>
  );
};

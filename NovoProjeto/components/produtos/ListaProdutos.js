import React from "react";
import { Text, View } from "react-native";
import estilo from "../estilo";
import produto from "./produto";

export default (props) => {
  return (
    <View>
      <Text style={estilo.textoGrande}>Lista de produtos</Text>
      {produto.map((p) => {
        return (
          <Text key={p.id} style={estilo.textoPequeno}>
            {p.id}: {p.nome} - R${p.preco}
          </Text>
        );
      })}
    </View>
  );
};

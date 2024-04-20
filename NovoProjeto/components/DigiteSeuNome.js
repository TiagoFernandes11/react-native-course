import React from "react";
import { View, TextInput, Text } from "react-native";
import estilo from "./estilo";
import { useState } from "react";

export default (props) => {
  const [nome, setNome] = useState();
  return (
    <View>
      <Text style={estilo.textoGrande}>Nome digitado: {nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};

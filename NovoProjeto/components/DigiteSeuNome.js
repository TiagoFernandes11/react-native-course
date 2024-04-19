import React from "react";
import { View, TextInput } from "react-native";
import estilo from "./estilo";
import { useState } from "react";

export default (props) => {
  const [nome, setNome] = useState("teste");
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};

import React, { useState } from "react";
import Filho from "./Filho";
import { View, Text } from "react-native";
import estilo from "../estilo";

export default function Pai(){
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }
  return (
    <View>
      <Text style={estilo.textoGrande}>{num}</Text>
      <Filho min={1} max={100} funcao={exibirValor} />
    </View>
  );
};

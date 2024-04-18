import React from "react";
import { Text, Button, View } from "react-native";
import estilo from "./estilo";
import { useState } from "react";

export default function Contador(props) {
  let passo = props.passo;

  const [numero, setNumero] = useState(props.inicial);

  function increment() {
    setNumero(numero + passo);
  }

  function decrement() {
    setNumero(numero - passo);
  }

  return (
    <View>
      <Text style={estilo.textoGrande}>{numero}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </View>
  );
}

import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function MinMax(parametro) {
  parametro1 = parametro.params.n1;
  parametro2 = parametro.params.n2;
  relacao = "maior que ";
  max = 0;
  min = 0;
  if (parametro1 > parametro2) {
    max = parametro1;
    min = parametro2;
  } else if (parametro1 < parametro2) {
    max = parametro2;
    min = parametro1;
  } else {
    relacao = "igual a";
    max = parametro1;
    min = parametro2;
  }
  return (
    <Text style={estilo.textoGrande}>
      O valor {max} é {relacao}o valor {min}
    </Text>
  );
}

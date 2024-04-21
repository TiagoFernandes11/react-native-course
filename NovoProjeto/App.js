import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Contador from "./components/Contador";
import Temp from "./components/temp";
import Pai from "./components/indireta/Pai";
import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";
import DigiteSeuNome from "./components/DigiteSeuNome";
import Quadrado from "./components/layout/Quadrado";
import FlexBoxv1 from "./components/layout/FlexBoxv1";
import FlexBoxV2 from "./components/layout/FlexBoxV2";
import FlexBoxV3 from "./components/layout/FlexBoxV3";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexBoxV3 />
    </SafeAreaView>
  );
}
{
  /* <DigiteSeuNome /> */
}
{
  /* <ListaProdutos/> */
}
{
  /* <UsuarioLogado
  usuario={{ nome: "Sara", sobrenome: "Fernandes Ribeiro de Brito" }}
/> */
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});

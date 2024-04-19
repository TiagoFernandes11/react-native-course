import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Contador from "./components/Contador";
import Temp from "./components/temp";
import Pai from "./components/indireta/Pai";
import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos/>
    </SafeAreaView>
  );
}
{/* <UsuarioLogado
  usuario={{ nome: "Sara", sobrenome: "Fernandes Ribeiro de Brito" }}
/> */}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});

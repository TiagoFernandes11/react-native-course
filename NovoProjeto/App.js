import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Mega from "./components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdeNumeros={7}/>
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

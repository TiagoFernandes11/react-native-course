import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Frag from "./components/Frag";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Frag principal="Cadastro" secundario="Tela de cadastro" />
      {/* <MinMax params={{ n1: 50, n2: 50 }} />
      <Aleatorio min={1} max={99}></Aleatorio> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});

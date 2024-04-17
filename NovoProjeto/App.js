import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MinMax params={{ n1: 50, n2: 50 }} />
      <MinMax params={{ n1: 5, n2: 50 }} />
      <Aleatorio min={1} max={99}></Aleatorio>
      <Aleatorio min={1} max={99}></Aleatorio>
      <Aleatorio min={1} max={99}></Aleatorio>
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

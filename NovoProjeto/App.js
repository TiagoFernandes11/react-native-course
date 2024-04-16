import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Primeiro from "./components/Primeiro";
import CompoPadrao, { Comp1, Comp2 } from "./components/Multi";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Primeiro />
      <CompoPadrao />
      <Comp1 />
      <Comp2 />
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

import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Contador from "./components/Contador";
import Temp from "./components/temp";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Contador inicial={10} passo={2} />
      <Temp />
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

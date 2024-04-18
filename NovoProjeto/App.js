import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Contador from "./components/Contador";
import Temp from "./components/temp";
import Pai from "./components/indireta/Pai";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Pai/>
      <Pai/>
      <Pai/>
      <Pai/>
      <Pai/>
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

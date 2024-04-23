import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>
          Tamanho da grade:
          {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

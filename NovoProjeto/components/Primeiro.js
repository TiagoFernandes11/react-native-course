import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Primeiro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Primeiro componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

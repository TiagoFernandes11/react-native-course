import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./src/components/Button";
export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
});

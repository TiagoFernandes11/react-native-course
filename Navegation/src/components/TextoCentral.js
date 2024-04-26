import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function TextoCentral(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
  },
});

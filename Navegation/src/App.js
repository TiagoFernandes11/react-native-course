import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextoCentral from "./components/TextoCentral";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

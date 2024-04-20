import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (props) => {
  const lado = 100;
  return (
    <View
      style={{
        height: lado,
        width: lado,
        backgroundColor: props.color || "#000",
      }}
    ></View>
  );
};

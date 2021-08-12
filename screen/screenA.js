import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet } from "react-native";

export default function screenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("ScreenB");
  };

  return (
    <View style={styles.body}>
      <Ionicons name="person-circle-outline" size={80} color={"black"} />
      <Text style={styles.text}>Screen A</Text>
      <Button title="Go to Screen B" onPress={onPressHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
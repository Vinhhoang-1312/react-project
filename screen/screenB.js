import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function screenB({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("ScreenA");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Button title="Go to Screen A" onPress={onPressHandler} />
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

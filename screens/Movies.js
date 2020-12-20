import React from "react";
import { Text, View, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      }}
    >
      <Text>Movies</Text>
      <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};

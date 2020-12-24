import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";

export default ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingLeft: 30 }}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20, marginBottom: 40 }}
    >
      {children}
    </ScrollView>
  </>
);

import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      justifyContent: loading ? "center" : "flex-start",
      flexBasis: loading ? 1 : "auto",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    child: PropTypes.node.isRequired,
}

export default ScrollContainer;

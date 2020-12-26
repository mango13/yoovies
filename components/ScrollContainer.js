import React, { useState } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";
import { RefreshControl } from "react-native";

const ScrollContainer = ({
  loading = false,
  children,
  contentContainerStyle,
  refreshFn,

}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flexBasis: loading ? 1 : "auto",
        ...contentContainerStyle,
      }}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  child: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;

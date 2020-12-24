import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";
import PropTypes from 'prop-types';

const HorizonSlider =  ({ title, children }) => (
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

HorizonSlider.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HorizonSlider;

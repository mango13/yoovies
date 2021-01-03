import React from "react";
import styled from "styled-components/native";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Poster = styled.Image`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const styles = {
  width: "90%",
  height: HEIGHT / 1.5,
  position: "absolute",
  top: 80,
};

export default ({ results }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
  });

  return (
    <Container>
      {results.reverse().map((result) => (
        <Animated.View
          style={{
            ...styles,
            transform: [...position.getTranslateTransform()],
          }}
          key={result.id}
          {...panResponder.panHandlers}
        >
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Animated.View>
      ))}
    </Container>
  );
};

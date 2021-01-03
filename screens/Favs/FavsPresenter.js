import React, { useState } from "react";
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
  const [topIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
      }).start();
    },
  });

  const rotationValues = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-5deg", "0deg", "5deg"],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {results.map((result, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
                zIndex: 1,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={{
              ...styles,
              zIndex: -index,
            }}
            key={result.id}
            {...panResponder.panHandlers}
          >
            <Poster source={{ uri: apiImage(result.poster_path) }} />
          </Animated.View>
        );
      })}
    </Container>
  );
};

import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Card = styled.View`
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
  top: 80px;
`;

const Poster = styled.Image`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  return (
    <Container>
      {results.reverse().map((result) => (
        <Card key={result.id}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};

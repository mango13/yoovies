import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

export default ({ loading, popular, topRated }) => (
  <ScrollContainer loading={loading}>
    <HorizontalSlider title="Popular Shows">
      {popular.map((show) => (
        <Vertical
          id={show.id}
          key={show.id}
          poster={show.poster_path}
          title={show.name}
          votes={show.vote_average}
        />
      ))}
    </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
          {topRated.map((show) => (
              <Vertical
                  id={show.id}
                  key={show.id}
                  poster={show.poster_path}
                  title={show.name}
                  votes={show.vote_average}
              />
          ))}
      </HorizontalSlider>
  </ScrollContainer>
);

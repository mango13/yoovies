import React from "react";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({
  movies,
  shows,
  keyword,
  onChange,
  onSubmit,
}) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{
      paddingTop: 10,
    }}
    refreshFn={onSubmit}
  >
    <Input
      placeholder="Write a keyword"
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies?.length !== 0 && (
      <HorizontalSlider title="Movie results">
        {movies?.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title="TV Shows results">
        {shows?.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);

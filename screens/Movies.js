import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    popularError: null,
    nowPlayingError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    // 한번만 렌더하기 위해서 뚱뚱한 state를 만들어줌
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>{movies.nowPlaying?.length}</Text>
    </View>
  );
};

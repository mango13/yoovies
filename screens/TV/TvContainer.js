import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    popularError: null,
    nowPlayingError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();

    setShows({
      loading: false,
      today,
      popular,
      thisWeek,
      topRated,
      todayError,
      popularError,
      thisWeekError,
      topRatedError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <TvPresenter refreshFn={getData} {...shows} />;
};

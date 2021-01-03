import React from "react";
import styled from "styled-components/native";
import { Dimensions, ActivityIndicator } from "react-native";
import { apiImage } from "../../api";
import ScrollContainer from "../../components/ScrollContainer";
import Poster from "../../components/Poster";
import Votes from "../../components/Movies/Votes";
import { formatDate } from "../../utils";

const BG = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  padding: 0px 30px;
  margin-top: 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 30px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading }) => {
  return (
    <ScrollContainer
      lading={loading}
      contentContainerStyle={{ paddingBottom: 580 }}
    >
      <>
        <Header>
          <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {typeof result.votes === "number" && (
                <Votes votes={result.votes} />
              )}
            </Info>
          </Container>
        </Header>
        <Data>
          {!!result.overview && (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          )}
          {loading && (
            <ActivityIndicator
              color="white"
              size="small"
              style={{ marginTop: 30 }}
            />
          )}
          {!!result.spoken_languages && (
            <>
              <DataName>Languages</DataName>
              <DataValue>
                {result.spoken_languages.map((l) => `${l.name} `)}
              </DataValue>
            </>
          )}
          {!!result.release_date && (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
          )}
          {!!result.status && (
            <>
              <DataName>Status</DataName>
              <DataValue>{result.status}</DataValue>
            </>
          )}
          {!!result.genres && (
              <>
                <DataName>Genres</DataName>
                <DataValue>
                  {result.genres.map((g, index) =>
                      index + 1 === result.genres.length ? g.name : `${g.name}, `
                  )}
                </DataValue>
              </>
          )}
          {!!result.number_of_episodes && !!result.number_of_seasons && (
              <>
                <DataName>Seasons / Episodes</DataName>
                <DataValue>{result.number_of_seasons} / {result.number_of_episodes}</DataValue>
              </>
          )}
          {!!result.runtime && (
            <>
              <DataName>Runtime</DataName>
              <DataValue>{result.runtime} minutes</DataValue>
            </>
          )}
          {!!result.first_air_date && (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatDate(result.first_air_date)}</DataValue>
            </>
          )}

        </Data>
      </>
    </ScrollContainer>
  );
};

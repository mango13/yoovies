import React from "react";
import Title from "./Title";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => (
  <>
    <Title title={title} />
    <Container>{children}</Container>
  </>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default List;

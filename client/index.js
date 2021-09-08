import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { List } from "./list";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9f4f1;
    color: #41424a;
  }`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Heading>Taskukirjat</Heading>
    <List />
  </Container>
);

export { App };

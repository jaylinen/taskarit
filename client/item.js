import React from "react";
import styled from "styled-components";
import * as R from "ramda";

const Number = styled.strong`
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: center;
  font-weight: normal;
  line-height: 3rem;
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  width: 3.5rem;
`;

const Title = styled.dt`
  font-size: 1.5rem;
  display: block;
  margin: 3rem 0 0 0;
  padding-left: 5.5rem;
  position: relative;
  font-family: "Libre Baskerville", serif;
`;

const Status = styled.dd`
  font-size: 0.75rem;
  display: block;
  margin: 0 0 0 0;
  padding-left: 5.5rem;
  font-family: "Libre Baskerville", serif;
`;

const Item = ({ status, index, orig: { title } }) => (
  <>
    <Title>
      <Number>{index}</Number> {title}
    </Title>
    {!R.isEmpty(status) && <Status>{status}</Status>}
  </>
);

export { Item };

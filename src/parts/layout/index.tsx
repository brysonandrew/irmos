import styled from "@emotion/styled";
import React, { FC } from "react";
import {
  HALF_SCROLL_BUFFER,
  HEADER_HEIGHT,
} from "../../config/constants";
import { Header } from "./Header";

const Root = styled.div`
  position: relative;
  min-height: calc(
    100vh + ${HALF_SCROLL_BUFFER}px
  );
`;

const Container = styled.div`
  position: relative;
  top: ${HEADER_HEIGHT}px;
`;

type TProps = {
  isResults: boolean;
  children: JSX.Element[];
};
export const Layout: FC<TProps> = ({
  isResults,
  children,
}) => (
  <Root
    className={`flex flex-col ${
      isResults ? "--results" : ""
    }`}
  >
    <Header />
    <Container className="relative flex-grow container mx-auto">
      {children}
    </Container>
  </Root>
);

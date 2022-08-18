import styled from "@emotion/styled";
import React from "react";
import { FOOTER_HEIGHT } from "../../config/constants";
import { rowCenter } from "../../styles/decorators";
import { Clock } from "../Clock";

const Root = styled.footer`
  ${rowCenter}
  height: ${FOOTER_HEIGHT}px;
`;
export const Footer = () => (
  <Root>
    {/* <Clock /> */}
  </Root>
);

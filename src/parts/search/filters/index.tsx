import styled from "@emotion/styled";
import { useEffect } from "react";
import {
  MAX_WIDTH,
  MAX_WIDTH_5,
} from "../../../config/constants";
import {
  columnCenter,
  rowCenter,
  rowGap,
} from "../../../styles/decorators";
import { useProviders } from "../useProviders";
import { Categories } from "./Categories";
import { Limit } from "./Limit";
import { Providers } from "./Providers";

const Row = styled.div`
  ${rowGap}
  position:relative;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;

export const Filters = () => {
  useProviders();
  return (
    <>
      <Limit />
      <div className="p-4" />
      <Row className="z-10">
        <Providers />
        <div className="p-4" />
        <Categories />
      </Row>
    </>
  );
};

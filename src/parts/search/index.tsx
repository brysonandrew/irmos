import styled from "@emotion/styled";
import { MAX_WIDTH } from "../../config/constants";
import {
  columnCenter,
  columnStart,
} from "../../styles/decorators";
import { Filters } from "./filters";
import { Input } from "./Input";

const Root = styled.div`
  ${columnCenter}
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;

export const Search = () => (
  <Root>
    <Filters />
    <div className="p-4" />
    <Input />
  </Root>
);

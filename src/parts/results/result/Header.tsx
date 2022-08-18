import { FC } from "react";
import styled from "@emotion/styled";
import { useContext } from "../../../state/Context";
import { TResult } from "../../../state/type";
import {
  columnEnd,
  columnStart,
  rowGap,
} from "../../../styles/decorators";
import { SubTitle } from "../../../text/SubTitle";

const Root = styled.header`
  ${rowGap}
  max-width: 100%;
`;
const Left = styled.header`
  ${columnStart}
  max-width: 100%;
  width: 80%;
`;

const Right = styled.header`
  ${columnEnd}
  width: 20%;
`;

type TProps = Pick<
  TResult,
  "time" | "title" | "size"
>;
export const Header: FC<TProps> = ({
  title,
  time, //human-readable eg/ "Aug. 18th '19"
  size,
}) => {
  const { loading, search } =
    useContext();

  return (
    <Root>
      <Left>
        <SubTitle>{title}</SubTitle>
        <SubTitle>{time}</SubTitle>
      </Left>
      <Right>
        <SubTitle>{size}</SubTitle>
      </Right>
    </Root>
  );
};

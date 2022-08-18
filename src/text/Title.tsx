import styled from "@emotion/styled";
import { modularScale } from "polished";
import { FC } from "react";

const Root = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: ${modularScale(2.8)};
`;

type TProps = {
  children: string;
};
export const Title: FC<TProps> = ({
  children,
}) => <Root>{children}</Root>;

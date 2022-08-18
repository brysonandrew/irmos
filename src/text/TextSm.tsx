import styled from "@emotion/styled";
import { modularScale } from "polished";
import {
  FC,
  HTMLAttributes,
} from "react";

const Root = styled.h6`
  text-transform: uppercase;
  font-size: ${modularScale(1)};
`;

type TProps = {
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;
export const TextSm: FC<TProps> = ({
  children,
  ...props
}) => (
  <Root className="truncate text-lg" {...props}>{children}</Root>
);

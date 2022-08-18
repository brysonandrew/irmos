import styled from "@emotion/styled";
import { modularScale } from "polished";
import {
  FC,
  HTMLAttributes,
} from "react";

const Root = styled.h6`
  color: #222;
  text-transform: uppercase;
  font-size: ${modularScale(1)};
  max-width: 100%;
`;

type TProps = {
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;
export const SubTitle: FC<TProps> = ({
  children,
  ...props
}) => (
  <Root className="truncate" {...props}>
    {children}
  </Root>
);

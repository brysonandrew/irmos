import styled from "@emotion/styled";
import { modularScale } from "polished";
import {
  FC,
  HTMLAttributes,
} from "react";

const Root = styled.p`
  font-size: ${modularScale(0.2)};
`;

type TProps = {
  children: string;
} & HTMLAttributes<HTMLParagraphElement>;
export const TextMd: FC<TProps> = ({
  children,
  ...props
}) => (
  <Root
    className="truncate text-xl"
    {...props}
  >
    {children}
  </Root>
);

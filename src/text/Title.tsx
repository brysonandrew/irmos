import type { FC } from "react";
import styled from "@emotion/styled";
import {
  motion,
  MotionProps,
} from "framer-motion";
import { modularScale } from "polished";

const Root = styled(motion.h1)`
  position: relative;
  text-transform: uppercase;
  font-size: ${modularScale(1.8)};
`;

type TProps = {
  children: string;
} & MotionProps;
export const Title: FC<TProps> = ({
  children,
  ...props
}) => (
  <Root {...props}>{children}</Root>
);

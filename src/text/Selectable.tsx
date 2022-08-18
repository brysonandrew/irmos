import styled from "@emotion/styled";
import {
  motion,
  MotionProps,
} from "framer-motion";
import { FC } from "react";
import { MAX_WIDTH_5 } from "../config/constants";
import { useContext } from "../state/Context";

const Root = styled(motion.p)`
  width: ${MAX_WIDTH_5}px;
`;

type TProps = {
  children: string;
} & MotionProps;
export const Selectable: FC<TProps> = ({
  children,
  ...props
}) => {
  const { ready } = useContext();
  return (
    <Root
      className="py-6 px-10 text-2xl truncate text-left"
      {...props}
    >
      {ready && children}
    </Root>
  );
};

import styled from "@emotion/styled";
import {
  motion,
  MotionProps,
} from "framer-motion";
import { useContext } from "../state/Context";
import { columnCenter } from "../styles/decorators";

const Root = styled(motion.p)`
  ${columnCenter}
  height: 100%;
`;

type TProps<T> = {
  children: T;
} & MotionProps;
export const Selectable = <
  T extends string | number
>({
  children,
  ...props
}: TProps<T>) => {
  const { ready } = useContext();
  return (
    <Root
      className="text-sm truncate text-left"
      {...props}
    >
      {ready && children}
    </Root>
  );
};

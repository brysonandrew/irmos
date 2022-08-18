import {
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import {
  motion,
  MotionProps,
} from "framer-motion";
import styled from "@emotion/styled";

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;

type TProps =
  HTMLAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    MotionProps;
export const Text: FC<TProps> = (
  props
) => (
  <Root
    className="w-full"
    initial={false}
    animate={{
      filter: `brightness(${
        props.disabled ? 40 : 100
      }%)`,
    }}
  >
    <Input
      initial={false}
      animate={{
        color: props.disabled
          ? "#333"
          : "#666",
      }}
      className="placeholder:text-black-222 py-8 px-12 w-full text-6xl"
      {...props}
    />
  </Root>
);

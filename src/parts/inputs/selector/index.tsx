import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import {
  FC,
  PointerEvent as TPointerEvent,
  useRef,
} from "react";

import styled from "@emotion/styled";
import { Menu } from "./Menu";
import { Selectable } from "../../../text/Selectable";
import { useState } from "react";
import useMeasure from "react-use-measure";

const Root = styled(motion.div)`
  width: 100%;
`;

const Selected = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

const Hoverable = styled(motion.div)``;

export type TSelectorProps<T> = {
  disabled?: boolean;
  value: string;
  options: readonly T[];
  onSelect(value: string): void;
};
export const Selector = <
  T extends string
>({
  disabled,
  value,
  options,
  onSelect,
}: TSelectorProps<T>) => {
  const idleRef = useRef(false);
  const [isHover, setIsHover] =
    useState(false);
  const mouseY = useMotionValue(0);
  const resetMousePosition = () => {
    mouseY.set(0);
  };
  const [ref, bounds] = useMeasure();

  const handlePointerMove = (
    event: TPointerEvent<HTMLDivElement>
  ) => {
    mouseY.set(
      -(
        event.clientY -
        bounds.y -
        bounds.height / 2
      ) * 4
    );
  };

  const variant = disabled
    ? "disabled"
    : "animate";

  const handleSelect = (
    value: string
  ) => {
    setIsHover(false);
    idleRef.current = true;
    resetMousePosition();
    onSelect(value);
  };
  const handleHoverStart = () => {
    if (!idleRef.current) {
      resetMousePosition();
      setIsHover(true);
    }
  };
  const handleHoverEnd = () => {
    idleRef.current = false;
    setIsHover(false);
  };
  return (
    <Root
      style={{
        cursor: disabled
          ? "not-allowed"
          : "default",
      }}
      initial={false}
      animate={variant}
      className="relative"
      variants={{
        animate: {
          filter: "brightness(100%)",
        },
        disabled: {
          filter: "brightness(40%)",
        },
      }}
    >
      <Selected>
        <Selectable>{value}</Selectable>
      </Selected>
      <Hoverable
        className="absolute top-0 left-0 w-full"
        animate={{
          height: isHover ? 200 : 80,
        }}
        transition={{
          duration: 4,
          delay: 0.5,
        }}
        ref={ref}
        {...{
          onHoverEnd: handleHoverEnd,
          onHoverStart:
            handleHoverStart,
        }}
        onPointerMove={
          handlePointerMove
        }
      >
        <AnimatePresence>
          {!disabled &&
            options &&
            options.length > 0 &&
            isHover && (
              <motion.div
                style={{ y: "-50%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Menu<T>
                  mouseY={mouseY}
                  options={options}
                  onSelect={
                    handleSelect
                  }
                />
              </motion.div>
            )}
        </AnimatePresence>
      </Hoverable>
    </Root>
  );
};

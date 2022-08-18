import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import {
  PointerEvent as TPointerEvent,
  useRef,
} from "react";
import styled from "@emotion/styled";
import { Menu } from "./Menu";
import { Selectable } from "../../../text/Selectable";
import { useState } from "react";
import useMeasure from "react-use-measure";
import {
  columnCenter,
  icon,
} from "../../../styles/decorators";
import { TNeuKey } from "../../../utils/neumorphism";
import { ICON_SIZE } from "../../../config/constants";
import { useContext } from "../../../state/Context";

const Root = styled(motion.div)`
  ${columnCenter}
  height: ${ICON_SIZE}px;
`;

const Label = styled(motion.div)`
  top: -28px;
  text-transform: uppercase;
`;

const Selected = styled(motion.div)`
  height: ${ICON_SIZE}px;
  width: 100%;
`;

const Hoverable = styled(motion.div)`
  height: ${ICON_SIZE}px;
  width: 100%;
`;

export type TSelectorProps<T> = {
  disabled?: boolean;
  value: T;
  options: readonly T[];
  onSelect(value: T): void;
  children: TNeuKey;
};
export const Selector = <
  T extends number | string
>({
  disabled,
  value,
  options,
  onSelect,
  children,
}: TSelectorProps<T>) => {
  const { style } = useContext();
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

  const handleSelect = (value: T) => {
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
  const handleToggle = () => {
    setIsHover(!isHover);
    idleRef.current = !idleRef.current;
    resetMousePosition();
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
      className="relative flex-1 mx-4"
      variants={{
        animate: {
          ...style.FlatSunken,
          ...style.common,
          filter: "brightness(100%)",
        },
        disabled: {
          filter: "brightness(40%)",
        },
      }}
    >
      <Label className="absolute text-xs">
        {children}
      </Label>
      <Selected>
        <Selectable>{value}</Selectable>
      </Selected>
      <Hoverable
        className="absolute top-0 left-0"
        animate={{
          height: isHover
            ? ICON_SIZE * 2
            : ICON_SIZE,
        }}
        transition={{
          duration: 4,
          delay: 0.5,
        }}
        ref={ref}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
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
                style={{ y: "-10%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Menu<T>
                  mouseY={mouseY}
                  options={options}
                  onToggle={
                    handleToggle
                  }
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

import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  rowCenter,
  rowGap,
} from "../../styles/decorators";

const Root = styled(motion.div)`
  ${rowGap}
  width: 100%;
`;

const Label = styled(motion.label)`
  ${rowCenter}
  position: relative;
  left: 0;
  width: 40px;
  height: 40px;
`;

const Input = styled(motion.input)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Text = styled(motion.div)`
  ${rowCenter}
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

type TProps = {
  value: number | null;
  disabled: boolean;
  onChange(value: number): void;
};
export const Radio: FC<TProps> = ({
  value,
  disabled,
  onChange,
}) => {
  return (
    <Root
      initial={false}
      animate={{
        filter: `brightness(${
          disabled ? 40 : 100
        }%)`,
      }}
    >
      {[10, 20, 50, 100].map(
        (count: number) => {
          const isChecked = count === value;

          return (
            <Label
              key={`Radio-${count}`}
              className="nm-concave-black-200"
            >
              <Input
                name="count"
                type="radio"
                value={count}
                checked={isChecked}
                onChange={(event) =>
                  onChange(
                    +event.currentTarget
                      .value
                  )
                }
              />
              <Text
                initial={false}
                animate={
                  isChecked
                    ? disabled
                      ? {
                          color: "#222",
                        }
                      : {
                          color: "currentColor",
                        }
                    : {
                        color:
                          "#333",
                      }
                }
              >
                {count}
              </Text>
            </Label>
          );
        }
      )}
    </Root>
  );
};

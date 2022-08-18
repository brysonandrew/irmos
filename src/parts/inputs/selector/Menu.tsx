import {
  motion,
  MotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import { columnCenter } from "../../../styles/decorators";
import { Selectable } from "../../../text/Selectable";

const Root = styled(motion.div)``;

const List = styled(motion.ul)`
  ${columnCenter};
  backdrop-filter: blur(16px)
    saturate(180%);
  background-color: rgba(
    11,
    11,
    11,
    0.7
  );
`;

const Item = styled(motion.li)``;
const Button = styled(motion.button)`
  cursor: pointer;
`;

type TProps<T> = {
  mouseY: MotionValue;
  options: readonly T[];
  onToggle(): void;
  onSelect(option: T): void;
};
export const Menu = <
  T extends string | number
>({
  options,
  onToggle,
  onSelect,
  mouseY,
}: TProps<T>) => {
  return (
    <Root
      style={{
        y: mouseY,
      }}
    >
      <List className="relative border-2 py-2">
        {options.map((option: T) => (
          <Item
            key={option}
            className="w-full"
          >
            <Button
              className="z-20 w-full"
              initial={false}
              animate="animate"
              whileHover="hover"
              variants={{
                animate: {
                  backgroundColor:
                    "rgba(0,0,0,0)",
                },
                hover: {
                  backgroundColor:
                    "rgba(111,111,111,0.8)",
                },
              }}
              onTap={() => {
                onToggle();
                onSelect(option);
              }}
              onHoverEnd={() =>
                onSelect(option)
              }
            >
              <Selectable
                variants={{
                  animate: {
                    color:
                      "rgba(111,111,111,0.8)",
                  },
                  hover: {
                    color:
                      "rgba(0,0,0,1)",
                  },
                }}
              >
                {option}
              </Selectable>
            </Button>
          </Item>
        ))}
      </List>
    </Root>
  );
};

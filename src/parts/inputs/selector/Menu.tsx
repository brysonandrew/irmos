import {
  motion,
  MotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import { columnStart } from "../../../styles/decorators";
import { Selectable } from "../../../text/Selectable";
import { MAX_HEIGHT } from "../../../config/constants";

const Root = styled(motion.div)``;

const List = styled(motion.ul)`
  ${columnStart} /* max-height: ${MAX_HEIGHT}px; */
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
  onSelect(option: string): void;
};
export const Menu = <T extends string>({
  options,
  onSelect,
  mouseY,
}: TProps<T>) => {
  return (
    <>
      <Root
        style={{
          y: mouseY,
        }}
      >
        <List className="relative border-2 border-black-666 py-6">
          {options.map((option: T) => (
            <Item
              key={option}
              className="px-6"
            >
              <Button
                className="z-20"
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
                onTap={() =>
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
    </>
  );
};

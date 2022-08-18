import styled from "@emotion/styled";
import {
  motion,
  Target,
} from "framer-motion";
import { NEU_RANGE_RECORD } from "../../../../../config/constants";
import { useContext } from "../../../../../state/Context";
import {
  NEU_KEYS,
  TNeuKey,
} from "../../../../../utils/neumorphism";
import { Selector } from "../../../../inputs/selector";

const Root = styled(motion.div)``;

export const Picker = () => {
  const { style, config, dispatch } =
    useContext();
  const enterExit = {
    opacity: 0,
    filter:
      "blur(10px) brightness(180%)",
    ...style.emptyCommon,
  } as Target;

  return (
    <Root
      initial={enterExit}
      className="relative flex flex-1 row justify-evenly z-10 w-full mx-4"
      animate={{
        opacity: 1,
        filter:
          "blur(0px) brightness(100%)",
      }}
      exit={enterExit}
    >
      {NEU_KEYS.map((key: TNeuKey) => (
        <Selector<number>
          key={key}
          value={config[key]}
          options={
            NEU_RANGE_RECORD[key]
          }
          onSelect={(value: number) =>
            dispatch({
              type: "config",
              value: {
                [key]: value,
              },
            })
          }
        >
          {key}
        </Selector>
      ))}
    </Root>
  );
};

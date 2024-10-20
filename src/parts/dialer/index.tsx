import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  CARBON_FIBER_CSS,
  WHITE_BORDER_CSS,
} from "../../styles/textures";
import { Logo } from "../../visual/Logo";
import { useContext } from "../../state/Context";
import { useDial } from "./useDial";
import { Result } from "./result";

const Root = styled(motion.div)`
  ${CARBON_FIBER_CSS}
  max-width: 100%;
`;

const Button = styled(motion.button)`
  position: relative;
`;

const Border = styled(motion.div)`
  ${WHITE_BORDER_CSS}
`;

const TextSm = styled.span``;

export const Dialer = () => {
  const { style, loading, active } =
    useContext();

  const dial = useDial();
  return (
    <Root
      className="flex items-start"
      initial={false}
      animate={{
        ...style.FlatSunken,
        ...style.text,
      }}
    >
      <Button
        className="p-10"
        initial={false}
        animate={
          loading.Calling
            ? "loading"
            : "animate"
        }
        whileHover={["tap", "hover"]}
        whileTap="tap"
        onTap={dial}
        variants={{
          animate: {
            ...style.common,
            ...style.FlatRisen,
            ...style.text,
            opacity: 0.9,
          },
          hover: {
            ...style.common,
            ...style.EmptyFlatRisen,
            ...style.emptyText,
            opacity: 1,
          },
          tap: {
            ...style.common,
            ...style.EmptyFlatRisen,
            ...style.emptyText,
            opacity: 1,
          },
          loading: {
            ...style.common,
            ...style.EmptyFlatRisen,
            ...style.emptyText,

            opacity: [
              0.9, 1, 0.4, 1, 0.2, 0.9,
            ],
            transition: {
              repeat: Infinity,
              duration: 1,
              repeatType: "mirror",
              ease: "backInOut",
              repeatDelay: 1,
            },
          },
        }}
      >
        <Border
          style={{ scale: 1 }}
          variants={{
            animate: {
              scale: 1,
            },
            hover: {
              scale: 1.04,
            },
            tap: {
              scale: 1.02,
            },
            loading: {
              scale: 1,
            },
          }}
          className="flex flex-col items-center justify-center absolute inset-1.5 border-r-2"
        >
          <TextSm className="uppercase text-xs mb-1">
            {loading.Calling
              ? "Calling..."
              : "Call"}
          </TextSm>
          <Logo />
        </Border>
      </Button>
      <Result />
    </Root>
  );
};

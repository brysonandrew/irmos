import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { centerChildren } from "../styles/decorators";
import { Logo } from "./Icon";

const Root = styled.div`
  ${centerChildren}
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #fff;
`;

const Ring = styled(motion.div)`
  ${centerChildren}
  border-radius: 50%;
  width: 90%;
  height: 90%;
`;

const Icon = styled(motion.div)`
  ${centerChildren}
  border-radius: 50%;
  width: 75%;
  height: 75%;
  color: #fff;
`;

export const Loading = () => (
  <Root className="relative">
    <Ring
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        type: "ease",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="absolute flex items-center content-center nm-concave-black-100-sm"
    >
      <Ring className="absolute flex items-center content-center nm-concave-black-100-sm" />
    </Ring>
    <Icon>
      <Logo />
    </Icon>
    <Ring
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        type: "ease",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      }}
      className="absolute flex items-center content-center nm-convex-black-100-sm"
    >
      <Ring className="absolute flex items-center content-center nm-convex-black-100-sm" />
    </Ring>
  </Root>
);

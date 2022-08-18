import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { FC } from "react";
import {
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
} from "../../config/constants";
import { useContext } from "../../state/Context";
import { Header } from "./header";
import { Footer } from "./Footer";

const Root = styled(motion.div)``;

const Container = styled.div`
  min-height: calc(
    100vh - ${FOOTER_HEIGHT}px
  );
`;

type TProps = {
  children: JSX.Element | JSX.Element[];
};
export const Layout: FC<TProps> = ({
  children,
}) => {
  const { style } = useContext();

  return (
    <Root
      className="relative flex flex-col px-4"
      initial={false}
      animate={style.common}
    >
      <Container className="relative container mx-auto">
        <Header />
        {children}
      </Container>
      <Footer />
    </Root>
  );
};

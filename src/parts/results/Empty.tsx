import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useContext } from "../../state/Context";

const Message = styled(motion.p)``;

export const Empty = () => {
  const { lastSearch } = useContext();
  return (
    <div className="nm-convex-black-400-md">
      <Message className="p-8 text-4xl text-center">
        No results found
        {lastSearch
          ? ` for "${lastSearch}"`
          : ""}
        .
      </Message>
    </div>
  );
};

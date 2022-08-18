import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  CARBON_FIBER_CSS,
  WHITE_BORDER_CSS,
} from "../../../styles/textures";
import { useContext } from "../../../state/Context";
import { TResult } from "../useDial";

const Root = styled(motion.div)``;
const List = styled.ul``;
const Item = styled.li``;

const Border = styled(motion.div)`
  ${WHITE_BORDER_CSS}
`;

const TextSm = styled.span``;

export const Result = () => {
  const { style, loading, active } =
    useContext();

  const result: TResult | null =
    active.Calling;
  if (!result) return null;

  return (
    <Root
      className="relative flex items-start p-4 w-full"
      initial={false}
      animate={{
        ...style.FlatSunken,
        ...style.text,
        ...style.common,
      }}
    >
      <Border className="flex flex-col items-center justify-center absolute inset-1.5 border-r-2 opacity-40" />
      <List className="text-xs uppercase">
        <Item>
          Type: {result.action.type}
        </Item>
        <Item>
          Error code:{" "}
          {result.jsonrpc.code}
        </Item>
        <Item>
          Reason:{" "}
          {result.jsonrpc.message}
        </Item>
        {/* <Item>
          {JSON.stringify(result)}
        </Item> */}
      </List>
    </Root>
  );
};

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useContext } from "../../state/Context";
import { TResult } from "../../state/type";
import { SubTitle } from "../../text/SubTitle";
import { TextMd } from "../../text/TextMd";
import { Loading } from "../../visual/Loading";
import { Empty } from "./Empty";
import { Result } from "./result";

const Root = styled(motion.div)``;

const List = styled.ul``;

export const Results = () => {
  const {
    loading,
    ready,
    search,
    results,
  } = useContext();
  const resultCount = results.length;
  if (!ready) return null;
  return (
    <Root
      className="absolute px-4 pb-40 left-1/2"
      style={{ x: "-50%" }}
    >
      {ready && search && (
        <TextMd className="p-4">{`Results for ${search}`}</TextMd>
      )}
      {loading.Results && <Loading />}
      {ready &&
        !loading.Results &&
        resultCount < 1 && <Empty />}
      {resultCount > 0 && (
        <List className="list-none">
          {results.map(
            (
              result: TResult,
              index: number
            ) => (
              <Result
                key={
                  result.desc ??
                  `Item-${index}`
                }
                {...result}
              />
            )
          )}
        </List>
      )}
    </Root>
  );
};

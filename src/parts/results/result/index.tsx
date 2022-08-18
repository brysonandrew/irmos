import { FC } from "react";
import styled from "@emotion/styled";
import { MAX_WIDTH } from "../../../config/constants";
import { useContext } from "../../../state/Context";
import { TResult } from "../../../state/type";
import { Center } from "./Center";
import { Footer } from "./footer";
import { Header } from "./Header";

const Root = styled.li`
  backdrop-filter: blur(16px)
    saturate(180%);
  background-color: rgba(7, 7, 7, 0.1);
  max-width: ${MAX_WIDTH}px;
`;

type TProps = TResult;
export const Result: FC<TProps> = (
  torrent
) => {
  const { loading, search } =
    useContext();

  const {
    title,
    time, //human-readable eg/ "Aug. 18th '19"
    seeds,
    peers,
    size, //human-readable eg/ "1.7 gb"
    desc, // provider's torrent's url
    provider,
  } = torrent;

  return (
    <Root className="nm-convex-black-200-xl text-md p-8 mt-4 mx-auto">
      <Header
        size={size}
        time={time}
        title={title}
      />
      <Center
        {...{
          seeds,
          peers,
          desc,
          provider,
        }}
      />
      <Footer {...torrent} />
    </Root>
  );
};

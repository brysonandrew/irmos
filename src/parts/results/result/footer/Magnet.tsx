import {
  FC,
  useEffect,
  useRef,
} from "react";
import styled from "@emotion/styled";
import { TResult } from "../../../../state/type";
import { rowGap } from "../../../../styles/decorators";
import { TextMd } from "../../../../text/TextMd";
import { useMagnet } from "../useMagnet";
import WebTorrent from "webtorrent";

const Root = styled.button`
  ${rowGap}
`;

type TProps = TResult;
export const Magnet: FC<TProps> = (
  torrent
) => {
  const frameRef =
    useRef<
      ReturnType<
        typeof requestAnimationFrame
      >
    >();
    const client = new WebTorrent();

  const init = useMagnet(client);
  const handleClick = async () => {
    const instance = await init({
      torrent,
    });

    const item = instance.torrents[0];
    item.on('noPeers', console.log)
    item.on('wire', console.log)

    item.on('download', console.log)

    console.log(instance);
    const progress = () => {
      console.log(instance);

      console.log(
        `
        Num peers ${
          item.numPeers +
          (item.numPeers === 1
            ? " peer"
            : " peers")
        }
        Ready ${item.ready}
        Done ${item.done}
        Downloading '${
          item.name
        }': ${Math.round(
          item.progress * 100
        )}%`
      );
      if (item.done) {
        cancelAnimationFrame(
          frameRef.current
        );
      }
      frameRef.current =
        requestAnimationFrame(progress);
    };
    progress();
  };
  useEffect(() => {
    return () => {
      cancelAnimationFrame(
        frameRef.current
      );
    };
  }, []);
  return (
    <Root
      className="mt-6 uppercase"
      onClick={handleClick}
    >
      Magnet
    </Root>
  );
};

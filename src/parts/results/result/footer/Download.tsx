import { FC } from "react";
import styled from "@emotion/styled";
import { TResult } from "../../../../state/type";
import { rowGap } from "../../../../styles/decorators";
import { TextMd } from "../../../../text/TextMd";
import { useDownload } from "../useDownload";

const Root = styled.button`
  ${rowGap}
`;

type TProps = TResult;
export const Download: FC<TProps> = (
  torrent
) => {
  const init = useDownload();
  return (
    <Root
      className="mt-6 uppercase"
      onClick={() => init({ torrent })}
    >
      download
    </Root>
  );
};

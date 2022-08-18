import { FC } from "react";
import styled from "@emotion/styled";
import { TResult } from "../../../../state/type";
import { rowGap } from "../../../../styles/decorators";
import { Download } from "./Download";
import { Magnet } from "./Magnet";

const Root = styled.footer`
  ${rowGap}
`;

const Save = styled.div`
  ${rowGap}
`;

type TProps = TResult;
export const Footer: FC<TProps> = (
  torrent
) => {
  return (
    <Root className="mt-6">
      <Save>
        <Download {...torrent} />
        <Magnet {...torrent} />
      </Save>
    </Root>
  );
};

import styled from "@emotion/styled";
import { FC } from "react";
import { MAX_WIDTH } from "../../../config/constants";
import { useContext } from "../../../state/Context";
import { TResult } from "../../../state/type";
import {
  columnStart,
  rowGap,
} from "../../../styles/decorators";
import { SubTitle } from "../../../text/SubTitle";
import { TextMd } from "../../../text/TextMd";

const Root = styled.div`
  ${rowGap}
`;

const Column = styled.div`
  ${columnStart}
  width: 100%;
`;

const Anchor = styled.a`
  max-width: 100%;
`;

type TProps = Pick<
  TResult,
  | "seeds"
  | "peers"
  | "desc"
  | "provider"
>;
export const Center: FC<TProps> = ({
  seeds,
  peers,
  desc,
  provider, // provider's torrent's url
}) => {
  const { loading, search } =
    useContext();

  return (
    <Root className="mt-6">
      <Column>
        <TextMd>{`${seeds} seeds`}</TextMd>
        <TextMd>{`${peers} peers`}</TextMd>
      </Column>
      <Anchor
        className="truncate"
        href={desc}
        target="_blank"
        rel="noreferrer"
      >
        <TextMd className="p-4">{provider}</TextMd>
      </Anchor>
    </Root>
  );
};

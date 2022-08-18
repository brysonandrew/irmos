import { FC } from "react";
import styled from "@emotion/styled";
import { useContext } from "../../../state/Context";
import { TResult } from "../../../state/type";
import { rowGap } from "../../../styles/decorators";
import { SubTitle } from "../../../text/SubTitle";
import { useDetail } from "./useDetail";

const Root = styled.button`
  ${rowGap}
  text-transform: uppercase;
`;

type TProps = TResult;
export const Detail: FC<TProps> = ({
  ...torrent
}) => {
  const init = useDetail();
  const { loading, search, dispatch } =
    useContext();

  const handleClick = () => {
    init({ torrent });
  };

  return (
    <Root onClick={handleClick}>
      See more
    </Root>
  );
};

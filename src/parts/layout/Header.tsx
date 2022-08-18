import styled from "@emotion/styled";
import packageJson from "../../../package.json";
import { HEADER_HEIGHT } from "../../config/constants";
import { useContext } from "../../state/Context";
import { rowCenter } from "../../styles/decorators";
import { Title } from "../../text/Title";
import { Loading } from "../../visual/Loading";

const Root = styled.div`
  ${rowCenter}
  height: ${HEADER_HEIGHT}px;
`;

const Space = styled.div``;

export const Header = () => {
  const { loading, providers } =
    useContext();
  return (
    <Root className="p-4 w-full">
      <Title>{packageJson.name}</Title>
      {/* {loading.Providers ||
      loading.Details ||
      loading.Results ? (
        <>
          <Title>loading</Title>
          <Space className="p-4" />
          <Loading />
        </>
      ) : (
        <Title>
          {packageJson.name}
        </Title>
      )} */}
    </Root>
  );
};

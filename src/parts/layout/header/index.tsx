import styled from "@emotion/styled";
import packageJson from "../../../../package.json";
import {
  HEADER_HEIGHT,
  ICON_SIZE,
} from "../../../config/constants";
import { useContext } from "../../../state/Context";
import { rowGap } from "../../../styles/decorators";
import { Title } from "../../../text/Title";
import { Menu } from "./menu";

const Root = styled.div`
  ${rowGap}
`;

export const Header = () => {
  const { style } = useContext();
  return (
    <Root className="relative my-6 w-full">
      <Title animate={style.text}>
        {packageJson.name}
      </Title>
      <Menu />
    </Root>
  );
};

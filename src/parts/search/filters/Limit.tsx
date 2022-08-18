import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useContext } from "../../../state/Context";
import { Radio } from "../../inputs/Radio";
import { rowGap } from "../../../styles/decorators";
import { SubTitle } from "../../../text/SubTitle";

const Root = styled(motion.div)`
  ${rowGap}
  position: relative;
  width: 100%;
`;
const Line = styled(motion.div)`
  position: absolute;
  left: 0%;
  top: 50%;
  height: 2px;
  width: 100%;
  background-color: #222;
`;
const Label = styled(motion.div)`
  ${rowGap}
  margin-right: 100px;
  background-color: #111;
`;

export const Limit = () => {
  const { ready, limit, dispatch } =
    useContext();
  const handleSelect = (
    value: number
  ) => {
    dispatch({
      type: "limit",
      value,
    });
  };
  return (
    <Root>
      <Line style={{ y: "-50%" }} />
      <Label className="relative z-10">
        <SubTitle>
          Result count
        </SubTitle>
      </Label>
      <Radio
        disabled={false}
        value={
          ready && limit ? limit : null
        }
        onChange={handleSelect}
      />
    </Root>
  );
};

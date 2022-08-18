import styled from "@emotion/styled";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { ICON_SIZE } from "../../../../config/constants";
import { useContext } from "../../../../state/Context";
import { icon } from "../../../../styles/decorators";
import { Close } from "../../../../visual/Close";
import { Swatch } from "../../../../visual/Swatch";
import { Picker } from "./picker";

const Root = styled(motion.div)``;

const Button = styled(motion.button)`
  ${icon}
`;

export const Menu = () => {
  const { style, active, dispatch } =
    useContext();

  const handleTap = () => {
    dispatch({
      type: "active",
      value: { Menu: !active.Menu },
    });
  };

  return (
    <Root className="flex flex-1 items-center justify-end">
      <AnimatePresence>
        {active.Menu && <Picker />}
      </AnimatePresence>
      <Button
        animate={style.FlatRisen}
        onTap={handleTap}
      >
        {active.Menu ? (
          <Close />
        ) : (
          <Swatch />
        )}
      </Button>
    </Root>
  );
};

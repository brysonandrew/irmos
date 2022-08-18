import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { TProviderKey } from "../../../config/constants";
import { useContext } from "../../../state/Context";
import { columnCenter } from "../../../styles/decorators";
import { Selector } from "../../inputs/selector";
import { useActivateProvider } from "../useActivateProvider";

const Root = styled(motion.div)`
  ${columnCenter}
  width: 100%;
`;

export const Providers = () => {
  const {
    ready,
    loading,
    provider,
    sources,
    dispatch,
  } = useContext();
  const activate =
  useActivateProvider();
  const handleSelect = (
    value: string
  ) => {
    dispatch({
      type: "provider",
      value,
    });
    activate({ provider: value });
  };
  return (
    <Root className="nm-convex-black-200">
      <Selector<TProviderKey>
        disabled={Boolean(
          !ready ||
            loading.Providers ||
            loading.Activate
        )}
        value={
          ready && provider
            ? provider
            : "Provider"
        }
        options={sources}
        onSelect={handleSelect}
      />
    </Root>
  );
};

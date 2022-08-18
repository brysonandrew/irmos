import styled from "@emotion/styled";
import { TProviderKey } from "../../../config/constants";
import { useContext } from "../../../state/Context";
import { Selector } from "../../inputs/selector";

const Root = styled.div`
  width: 100%;
`;

export const Categories = () => {
  const {
    ready,
    provider,
    loading,
    categories,
    category,
    dispatch,
  } = useContext();
  const handleSelect = (
    value: string
  ) => {
    dispatch({
      type: "category",
      value,
    });
  };
  return (
    <Root className="nm-convex-black-200">
      <Selector<string>
        disabled={ready && !provider}
        value={
          ready && category
            ? category
            : "Category"
        }
        options={categories}
        onSelect={handleSelect}
      />
    </Root>
  );
};

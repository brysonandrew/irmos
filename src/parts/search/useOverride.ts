import { TOverrideBody } from "../../pages/api/providers/override";
import { useContext } from "../../state/Context";

export const useOverride = () => {
  const { loading, dispatch } =
    useContext();

  return async (
    options: TOverrideBody
  ) => {
    if (
      typeof window === "undefined" ||
      loading.Override
    )
      return null;

    dispatch({
      type: "loading",
      value: {
        ...loading,
        Override: true,
      },
    });
    try {
      await window.fetch(
        "/api/providers/override",
        {
          method: "POST",
          body: JSON.stringify(options),
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );
      dispatch({
        type: "loading",
        value: {
          ...loading,
          Override: false,
        },
      });
    } catch (error) {
      console.warn(
        "Something went wrong: useOverride"
      );
      console.error(error);
    }
  };
};

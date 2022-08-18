import { TDetailBody } from "../../../pages/api/torrents/detail";
import { useContext } from "../../../state/Context";

export const useDetail = () => {
  const { loading, dispatch } =
    useContext();

  return async (
    options: TDetailBody
  ) => {
    if (
      typeof window === "undefined" ||
      loading.Detail
    )
      return null;

    dispatch({
      type: "loading",
      value: {
        ...loading,
        Detail: true,
      },
    });
    try {
      let response = await window.fetch(
        "/api/torrents/detail",
        {
          method: "POST",
          body: JSON.stringify(options),
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );
      const { results } =
        (await response.json()) ?? {};

      console.log(results);

      dispatch({
        type: "loading",
        value: {
          ...loading,
          Detail: false,
        },
      });
    } catch (error) {
      console.warn(
        "Something went wrong: useDetail"
      );
      console.error(error);
    }
  };
};

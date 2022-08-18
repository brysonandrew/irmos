import { TDetailBody } from "../../../pages/api/torrents/detail";
import { useContext } from "../../../state/Context";

export const useDownload = () => {
  const { loading, dispatch } =
    useContext();

  return async (
    options: TDetailBody
  ) => {
    if (
      typeof window === "undefined" ||
      loading.Download
    )
      return null;

    dispatch({
      type: "loading",
      value: {
        ...loading,
        Download: true,
      },
    });
    try {
      let response = await window.fetch(
        "/api/torrents/Download",
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
          Download: false,
        },
      });
    } catch (error) {
      console.warn(
        "Something went wrong: useDownload"
      );
      console.error(error);
    }
  };
};

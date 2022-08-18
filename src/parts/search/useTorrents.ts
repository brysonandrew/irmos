import { useState } from "react";
import { SCROLL_BUFFER } from "../../config/constants";
import { TTorrentsBody } from "../../pages/api/torrents";
import { useContext } from "../../state/Context";
import { useAnimateScroll } from "../../utils/scroll/useAnimateScroll";

export const useTorrents = () => {
  const { loading, dispatch } =
    useContext();
  const [scroll, setScroll] =
    useState(null);
  useAnimateScroll<Window>(scroll);

  return async (
    options: TTorrentsBody
  ) => {
    if (
      typeof window === "undefined" ||
      loading.Results
    )
      return null;

    dispatch({
      type: "loading",
      value: {
        ...loading,
        Activate: true,
      },
    });
    try {
      let response = await window.fetch(
        "/api/torrents",
        {
          method: "POST",
          body: JSON.stringify({
            provider: options.provider,
            search: options.search,
            limit: options.limit,
            category: options.category,
          }),
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );
      const { results } =
        (await response.json()) ?? {};

      if (results) {
        setScroll(500);
      }

      dispatch({
        type: "results",
        value: results,
      });
    } catch (error) {
      console.warn(
        "Something went wrong: useTorrents"
      );
      console.error(error);
    }
  };
};

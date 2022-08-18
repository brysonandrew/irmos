import {
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useContext } from "../../state/Context";
import { resolveCategoryMap } from "./utils";

export const useProviders =
  (): (() => Promise<void>) => {
    const {
      dispatch,
      providers,
      loading,
    } = useContext();
    const isInit = useRef(false);
    const isLoading = loading.Providers;
    const providerCount =
      providers.length;

    const init =
      useCallback(async () => {
        if (
          typeof window ===
            "undefined" ||
          isLoading
        )
          return null;

        try {
          dispatch({
            type: "loading",
            value: {
              ...loading,
              Providers: true,
            },
          });
          const response =
            await window.fetch(
              "/api/providers/list"
            );
          const { results } =
            await response.json();
          const categoryMap =
            resolveCategoryMap(results);

          dispatch({
            type: "categoryMap",
            value: categoryMap,
          });
        } catch (error) {
          console.warn(
            "Something went wrong: useProviders"
          );
          console.error(error);
        }
      }, [
        isLoading,
        loading,
        dispatch,
      ]);

    const initRef = useRef(init);

    useEffect(() => {
      if (
        !isInit.current &&
        !isLoading &&
        providerCount === 0
      ) {
        isInit.current = true;
        initRef.current();
      }
    }, [providerCount, isLoading]);
    return init;
  };

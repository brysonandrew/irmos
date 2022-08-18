import { TActivateBody } from "../../pages/api/providers/activate";
import { useContext } from "../../state/Context";
import { resolveCategoryMap } from "./utils";

type TReturn = (
  body: TActivateBody
) => void;
export const useActivateProvider =
  (): TReturn => {
    const { loading, dispatch } =
      useContext();

    return async (
      body: TActivateBody
    ) => {
      if (
        typeof window === "undefined" ||
        loading.Activate
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
        const response =
          await window.fetch(
            "/api/providers/activate",
            {
              method: "POST",
              body: JSON.stringify(
                body
              ),
              headers: {
                "Content-Type":
                  "application/json",
              },
            }
          );
        const { results } =
          await response.json();
        console.log(results);

        const categoryMap =
          resolveCategoryMap(results);
        dispatch({
          type: "targets",
          value: {
            results,
            categoryMap,
          },
        });
      } catch (error) {
        console.warn(
          "Something went wrong: useActivateProvider"
        );
        console.error(error);
      }
    };
  };

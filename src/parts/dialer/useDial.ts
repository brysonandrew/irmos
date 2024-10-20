import { useContext } from "../../state/Context";
import { TDialerResult } from "./types";

type TReturn = () => Promise<void>;
export const useDial = (): TReturn => {
  const { dispatch } = useContext();

  let result: TDialerResult | null = null;
  return async () => {
    dispatch({
      type: "loading",
      value: { Calling: true },
    });
    try {
      const response =
        await window.fetch(
          "/api/call",
          {
            method: "GET",
            headers: {
              "Content-Type":
                "application/json",
            },
          }
        );
      result = await response.json();
      console.log(result);
    } catch (error) {
      result = error;
      console.error(error);
    } finally {
      dispatch({
        type: "active",
        value: { Calling: result },
      });
    }
  };
};

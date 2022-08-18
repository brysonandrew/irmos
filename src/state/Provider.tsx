import {
  useEffect,
  useReducer,
  useRef,
} from "react";
import type { FC } from "react";
import {
  CONFIG_1337x,
  _STATE_STORAGE_KEY,
} from "../config/constants";
import { Context } from "./Context";
import {
  reducer,
  resolveInitState,
} from ".";
import { useLocalStorage } from "../utils/storage";
import {
  TState,
  TReducer,
  TKeyValuePair,
} from "./type";
import { INIT_STATE } from "./constants";
import { useOverride } from "../parts/search/useOverride";

type TProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const [savedState, setSavedState] =
    useLocalStorage<TState>(
      _STATE_STORAGE_KEY,
      INIT_STATE
    );
  const [state, dispatch] = useReducer<
    TReducer,
    TState
  >(
    (...args) => {
      const nextState = reducer(
        ...args
      );
      setSavedState({
        ...nextState,
        loading: {},
        ready: false,
      });
      return nextState;
    },
    INIT_STATE,
    (state) =>
      resolveInitState(
        state,
        savedState
      )
  );
  const init = useOverride();
  const initRef = useRef(init);
  useEffect(() => {
    initRef.current({
      provider: "1337x",
      config: JSON.stringify(
        CONFIG_1337x
      ),
    });
    dispatch({ type: "ready" });
  }, []);
  return (
    <Context.Provider
      value={{
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

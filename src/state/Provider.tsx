import {
  useEffect,
  useReducer,
  useRef,
} from "react";
import type { FC } from "react";
import { _STATE_STORAGE_KEY } from "../config/constants";
import { Context } from "./Context";
import {
  reducer,
  resolveHydrationState,
  resolvePostHydrationState,
} from ".";
import { useLocalStorage } from "../utils/storage";
import {
  TState,
  TReducer,
} from "./types";
import { INIT_STATE } from "./constants";

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
        active: {},
        loading: {},
        ready: false,
      });
      return nextState;
    },
    INIT_STATE,
    (state) =>
      resolveHydrationState(
        state,
        savedState
      )
  );
  const readyRef = useRef(() =>
    dispatch({
      type: "ready",
      value: resolvePostHydrationState(
        state,
        savedState
      ),
    })
  );
  useEffect(() => {
    readyRef.current();
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

import { neuStyle } from "../utils/neumorphism";
import { INIT_STATE } from "./constants";
import {
  TState,
  TReducerAction,
} from "./types";
export const resolveHydrationState = (
  state: TState,
  savedState?: TState
): TState => {
  const baseState =
    savedState ?? INIT_STATE;
  const { config, style, ...appState } =
    baseState;
  return {
    ...state,
    ...appState,
  };
};
export const resolvePostHydrationState =
  (
    state: TState,
    savedState?: TState
  ): TState => {
    const baseState =
      savedState ?? INIT_STATE;
    const { ...appState } = baseState;
    return {
      ...state,
      ...appState,
    };
  };

export const reducer = (
  state: TState,
  { type, value }: TReducerAction
) => {
  switch (type) {
    case "state": {
      return { ...state, ...value };
    }
    case "loading": {
      return {
        ...state,
        loading: value,
      };
    }
    case "active": {
      return {
        ...state,
        active: value,
        loading: {},
      };
    }
    case "ready": {
      return {
        ...state,
        ...value,
        ready: true,
      };
    }
    case "config": {
      const config = {
        ...state.config,
        ...value,
      };
      return {
        ...state,
        config,
        style: neuStyle(config),
      };
    }
    default: {
      console.error(type);
      throw new Error(
        `Action type invalid. ${type}`
      );
    }
  }
};

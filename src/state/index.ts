import { setMaxListeners } from "stream";
import { INIT_STATE } from "./constants";
import {
  TState,
  TReducerAction,
} from "./type";

export const resolveInitState = (
  state: TState,
  savedState: TState
): TState => {
  const appState =
    savedState ?? INIT_STATE;
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
    case "results": {
      return {
        ...state,
        results: value,
      };
    }
    case "loading": {
      return {
        ...state,
        loading: value,
        ...(value === "Results"
          ? { lastSearch: state.search }
          : {}),
      };
    }
    case "categoryMap": {
      return {
        ...state,
        categoryMap: value,
        providers: Object.keys(value),
        loading: {
          ...state.loading,
          Providers: false,
        },
      };
    }
    case "category": {
      return {
        ...state,
        category: value,
      };
    }
    case "targets": {
      const categories = state.provider
        ? value.categoryMap[
            state.provider
          ] ?? []
        : [];
      return {
        ...state,
        targets: value.results,
        sources: state.sources.filter(
          (v) =>
            !value.results.includes(v)
        ),
        categoryMap: value.categoryMap,
        categories,
        category: categories[0],
        loading: {
          ...state.loading,
          Activate: false,
        },
      };
    }
    case "provider": {
      const categories =
        state.categoryMap[value] ?? [];
      return {
        ...state,
        provider: value,
        categories,
        category: categories[0] ?? null,
      };
    }
    case "search": {
      return {
        ...state,
        search: value,
      };
    }
    case "limit": {
      return {
        ...state,
        limit: value,
      };
    }
    case "ready": {
      return {
        ...state,
        ready: true,
      };
    }
    case "search": {
      return {
        ...state,
        search: value,
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

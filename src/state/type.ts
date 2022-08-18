import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";
import { TProviderKey } from "../config/constants";
import { T1337x } from "../types/results";
import { INIT_STATE } from "./constants";

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TResult = T1337x; // | any;
export type TResults =
  | readonly T1337x[]
  | readonly any[];

export type TState = {
  loading: Partial<
    Record<
      TLoadableKey,
      boolean | string
    >
  >;
  search: string | null;
  lastSearch: string | null;
  results: TResults;
  categoryMap: Record<string, string[]>;
  categories: string[];
  category: string | null;
  provider: TProviderKey | null;
  providers: readonly TProviderKey[];
  targets: readonly TProviderKey[];
  sources: readonly TProviderKey[];
  ready: boolean;
  limit: number;
};

export type TActionType =
  | keyof typeof INIT_STATE
  | "state";
export type TActionValue = any;

export type TKeyValuePair = [
  key: TActionType,
  value: TActionValue
];

export type TAction = {
  type: TActionType | "state";
  value?: TActionValue;
};

export type TDispatch =
  Dispatch<TAction>;
export type TReducer = Reducer<
  TState,
  TAction
>;
export type TReducerState =
  ReducerState<TReducer>;
export type TReducerAction =
  ReducerAction<TReducer>;

export const LOADABLE = [
  "Results",
  "Providers",
  "Activate",
  "Detail",
  "Download",
  "Magnet",
  "Override",
] as const;
export type TLoadableKey =
  typeof LOADABLE[number];

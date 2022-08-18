import { PROVIDERS } from "../config/constants";
import { TState } from "./type";

export const INIT_STATE: TState = {
  loading: {},
  search: null,
  lastSearch: null,
  results: [],
  categoryMap: {},
  categories: [],
  category: null,
  providers: [],
  provider: null,
  targets: [],
  sources: PROVIDERS,
  ready: false,
  limit: 20,
};

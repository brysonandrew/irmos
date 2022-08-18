import {
  neuStyle,
  TNeuBoxConfig,
} from "../utils/neumorphism";
import { TState } from "./types";
const config: TNeuBoxConfig = {
  size: 4,
  blur: 2,
  hue: 0,
  saturation: 0,
  lightness: 0,
};
const style = neuStyle(config);
export const INIT_STATE: TState = {
  style,
  config,
  active: {},
  loading: {},
  ready: false,
};

import {
  neuStyle,
  TNeuBoxConfig,
} from "../utils/neumorphism";
import { TState } from "./types";
const config: TNeuBoxConfig = {
  size: 4,
  blur: 2,
  contrast: 8,
  hue: 10,
  saturation: 60,
  lightness: 40,
};
const style = neuStyle(config);
export const INIT_STATE: TState = {
  style,
  config,
  active: {},
  loading: {},
  ready: false,
};

import {
  TNeuKey,
  resolveRange,
} from "../utils/neumorphism";

export const _STATE_STORAGE_KEY =
  "_STATE_STORAGE_KEY";

export const HEADER_HEIGHT = 160;
export const FOOTER_HEIGHT = 120;

export const ICON_SIZE = 40;

export const NEU_RANGE_RECORD: Record<
  TNeuKey,
  number[]
> = {
  hue: resolveRange(0, 361, 11),
  saturation: resolveRange(0, 100, 4),
  lightness: resolveRange(0, 100, 4),
  size: resolveRange(0.5, 6, 0.1),
  blur: resolveRange(0.5, 6, 0.1),
};

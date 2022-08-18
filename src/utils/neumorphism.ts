import {
  Target,
  TargetAndTransition,
} from "framer-motion";
import {
  clampMax,
  clampMin,
} from "./number";

export enum ENeuShape {
  FlatRisen = "FlatRisen",
  FlatSunken = "FlatSunken",
  EmptyFlatRisen = "EmptyFlatRisen",
  EmptyFlatSunken = "EmptyFlatSunken",
}
export type THslConfig = {
  hue: number;
  saturation: number;
  lightness: number;
};
const resolveHsl = ({
  hue,
  saturation,
  lightness,
}): string =>
  `hsl(${hue}, ${saturation}%, ${lightness}%)`;
export const HSL_KEYS = [
  "hue",
  "saturation",
  "lightness",
] as const;
export type THslKey =
  typeof HSL_KEYS[number];

export const NEU_KEYS = [
  ...HSL_KEYS,
  "size",
  "blur",
] as const;

export type TNeuKey =
  typeof NEU_KEYS[number];
export type TNeuValue = number | string;

export const resolveRange = (
  min: number,
  max: number,
  multiplier: number = 1
) =>
  [
    ...Array(
      ~~(max / multiplier - min)
    ),
  ].map(
    (_, i) =>
      +(min + i * multiplier).toFixed(
        multiplier < 1
          ? ~~(20 * multiplier)
          : 0
      )
  );

type TShadowReturn = {
  fill: string;
  back: string;
  emptyFill: string;
  emptyBack: string;
};
const resolveShadow = ({
  size,
  color,
  blur,
}): TShadowReturn => ({
  fill: `${size}px ${size}px ${
    size * blur
  }px ${color.fill}`,
  back: `${-size}px ${-size}px ${
    size * blur
  }px ${color.back}`,
  emptyFill: `${size}px ${size}px ${0}px ${
    color.fill
  }`,
  emptyBack: `${-size}px ${-size}px ${0}px ${
    color.back
  }`,
});

export type TNeuBoxConfig =
  THslConfig & {
    size: number;
    blur: number;
  };

export type TNeuStyleValue =
  | TargetAndTransition
  | Target;
export type TNeuStyleReturn = Record<
  ENeuShape,
  TNeuStyleValue
> & {
  common: TNeuStyleValue;
  emptyCommon: TNeuStyleValue;
  text: TNeuStyleValue;
  emptyText: TNeuStyleValue;
};
export const neuStyle = ({
  size,
  blur,
  hue,
  saturation,
  lightness,
}: TNeuBoxConfig): TNeuStyleReturn => {
  const hsl: Record<THslKey, number> = {
    hue,
    saturation,
    lightness,
  };
  const base = resolveHsl(hsl);
  const spread = size * blur;
  const contrast = {
    fill: clampMin(
      0,
      lightness - spread
    ),
    back: clampMax(
      100,
      lightness + spread
    ),
  };
  const textLightness = 100 - lightness;
  const color = {
    fill: resolveHsl({
      ...hsl,
      lightness: contrast.fill,
    }),
    back: resolveHsl({
      ...hsl,
      lightness: contrast.back,
    }),
    text: resolveHsl({
      ...hsl,
      lightness: textLightness,
    }),
    emptyText: {
      color: TRANSPARENT,
      textShadow: EMPTY_NEU_SHADOW,
    },
  };

  const shadow = resolveShadow({
    size,
    color,
    blur,
  });

  const common: TargetAndTransition = {
    color: color.text,
    backgroundColor: base,
  };
  return {
    common,
    emptyCommon: {
      backgroundColor: TRANSPARENT,
      color: TRANSPARENT,
    },
    text: {
      color: color.text,
      textShadow: `${shadow.fill}, ${shadow.back}`,
    },
    emptyText: {
      color: color.text,
      textShadow: `${shadow.fill}, ${shadow.back}`,
    },
    [ENeuShape.FlatRisen]: {
      boxShadow: `${shadow.fill}, ${shadow.back}`,
    },
    [ENeuShape.FlatSunken]: {
      boxShadow: `inset ${shadow.fill}, inset ${shadow.back}`,
    },
    [ENeuShape.EmptyFlatRisen]: {
      boxShadow: `${shadow.emptyFill}, ${shadow.emptyBack}`,
    },
    [ENeuShape.EmptyFlatSunken]: {
      boxShadow: `inset ${shadow.emptyFill}, inset ${shadow.emptyBack}`,
    },
  };
};

export const TRANSPARENT =
  "rgba(0,0,0,0)";

export const EMPTY_SHADOW =
  resolveShadow({
    size: 0,
    blur: 0,
    color: {
      fill: TRANSPARENT,
      back: TRANSPARENT,
    },
  });
export const EMPTY_NEU_SHADOW: string = `${EMPTY_SHADOW.fill}, ${EMPTY_SHADOW.back}`;

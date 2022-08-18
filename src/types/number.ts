import { TRequireAtLeastOne } from "./mappers";

export type TClampBaseConfig = {
  value: number;
  min?: number;
  max?: number;
};

export type TClampConfig =
  TRequireAtLeastOne<
    TClampBaseConfig,
    "min" | "max"
  >;

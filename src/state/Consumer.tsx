import type { FC } from "react";
import { Context } from "./Context";
import { TState } from "./type";

type TConsumerProps = { children(values: TState): JSX.Element };
export const Consumer: FC<TConsumerProps> = ({ children }) => (
  <Context.Consumer>{children}</Context.Consumer>
);

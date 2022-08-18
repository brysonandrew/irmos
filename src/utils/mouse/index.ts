import type { MouseEvent as TMouseEvent } from "react";

type TConfig<T> = {
  event: TMouseEvent<T, MouseEvent>;
  ref: T;
};
export type TRelativeCoordsReturn = {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};
export const getRelativeCoords = <
  T extends HTMLElement
>({
  event,
  ref,
}: TConfig<T>): TRelativeCoordsReturn => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: ref.offsetLeft,
    top: ref.offsetTop,
    width: ref.clientWidth,
    height: ref.clientHeight,
  };

  let reference = ref.offsetParent as T;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference =
      reference.offsetParent as T;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX:
      (position.x -
        offset.left -
        offset.width / 2) /
      (offset.width / 2),
    centerY:
      (position.y -
        offset.top -
        offset.height / 2) /
      (offset.height / 2),
  };
};

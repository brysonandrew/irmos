import {
  AnimationOptions,
  MotionValue,
  useMotionValue,
  animate,
} from "framer-motion";
import {
  useState,
  useEffect,
} from "react";

type TConfig = AnimationOptions<number>;
export const useAnimateScroll = <
  T extends
    | HTMLElement
    | Window = Window
>(
  value: number | null
): [config: TConfig, ref: any] => {
  const [node, setNode] =
    useState<T | null>(null);
  const [config] = useState<TConfig>({
    type: "tween",
    duration: 0.5,
    ease: [0.54, 0.01, 0.61, 1],
  });

  const motionValue: MotionValue =
    useMotionValue(0);

  useEffect(() => {
    if (value === null) return;
    motionValue.set(
      (node as HTMLElement)
        ?.scrollTop ?? 0
    );
    const controls = animate(
      motionValue,
      value,
      config
    );
    return controls.stop;
  }, [
    value,
    motionValue,
    config,
    node,
  ]);

  useEffect(() => {
    const unsubscribe =
      motionValue.onChange((frame) => {
        if (node) {
          (
            node as HTMLElement
          ).scrollTop = frame;
        } else {
          window.scroll({ top: frame });
        }
      });
    return unsubscribe;
  }, [motionValue, node]);

  return [config, setNode];
};

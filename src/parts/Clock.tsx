import styled from "@emotion/styled";
import React, {
  memo,
  useEffect,
  useState,
} from "react";

const Root = styled.div``;

const Clock = memo(() => {
  const [time, setTime] =
    useState<string>("");
  useEffect(() => {
    var last = 0;
    const loop = () => {
      const now = Date.now();
      if (!last || now - last >= 1000) {
        const date = new Date(
        ).toLocaleTimeString("en-US");
        last = now;
        setTime(date);
      }
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return <Root>{time}</Root>;
});
Clock.displayName = "Clock";
export { Clock };
